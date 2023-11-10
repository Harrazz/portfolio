import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Notification from '@/components/toast/notification';
import EditForm from '@/components/form/EditForm';

export default function ConfUsermgmt() {
    // create column in table
    const columns = [
        {
            name: 'Username',
            selector: (row) => row.username,
            sortable: true,
        },
        {
            name: 'First Name',
            selector: (row) => row.first_name,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: (row) => row.last_name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: 'Action',
            cell: (row) => (
                <div>
                    <button className="btn btn-outline-primary mr-2" onClick={() => handleEdit(row)}><i className="bi bi-pencil-fill"></i>
                    </button>
                    <span style={{ margin: '0 10px' }}></span>
                    <button className="btn btn-outline-danger" onClick={() => handleDelete(row)}><i className="bi bi-trash3-fill"></i>
                    </button>
                </div>),
            sortable: false,
        },
    ];
    const [users, setUsers] = useState([]); //
    const [isEditing, setIsEditing] = useState(false);
    const [editUser, setEditUser] = useState(null); // User to edit
    const [searchText, setSearchText] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all'); // Default filter
    const [newData, setNewData] = useState({
        newUsername: "",
        newFName: "",
        newLName: "",
        newEmail: "",
    });
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');
    // baru tambah - delete 
    const [userToDelete, setUserToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false); // State for delete confirmation popup

    // to filter the data 
    const filteredUsers = users.filter((user) => {
        if (selectedFilter === 'all') {
            return ['username', 'first_name', 'last_name', 'email'].some((field) =>
                user[field].toLowerCase().includes(searchText.toLowerCase())
            );
        } else {
            return user[selectedFilter].toLowerCase().includes(searchText.toLowerCase());
        }
    });
    // filter function
    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };
    // to retrieve the  value from the system. (require: : API GET REQUEST)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/caduser_admin/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": 'Token 3a4ff6be723c9dc5a8fe26f0e006389be122c198',
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data.results || []);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUsers();
    }, []);
    const handleClose = () => {
        setShowToast(false); // Function to close the toast
    };
    // to edit the value u wanted to
    const handleEdit = (user) => {
        console.log(`Editing user : ${user.uuid}`)
        setSelectedRow(row);
        setEditUser(user);
        setIsEditing(true);
        setNewData({
            newUsername: user.username,
            newFName: user.first_name,
            newLName: user.last_name,
            newEmail: user.email,
        });
    }
    const handleFieldChange = (field, value) => {
        setNewData({ ...newData, [field]: value });
    };
    // to exit edit form
    const handleCloseEditForm = (e) => {
        e.preventDefault();
        setEditUser(null); // Clear the user to edit
        setIsEditing(false); // Hide the edit form
    }
    // to save the updated value in the system. (require: : API PUT REQUEST)
    const handleSave = async (e) => {
        // prevent refresh page
        e.preventDefault();
        if (editUser) {
            // warning for blank input text
            if (Object.values(newData).some((value) => value.trim() === '')) {
                setToastType('warning');
                setToastMessage('Kindly complete all the required fields.');
                setShowToast(true);
                return;
            }
            try {
                // to save the updated data 
                const updatedData = {
                    username: newData.newUsername,
                    first_name: newData.newFName.toUpperCase(),
                    last_name: newData.newLName.toUpperCase(),
                    email: newData.newEmail,
                }
                const response = await fetch(`http://localhost:8000/api/caduser_admin_dtl/${editUser.uuid}/`, {
                    method: "PUT", // Use PUT to update the user
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": 'Token 3a4ff6be723c9dc5a8fe26f0e006389be122c198',
                    },
                    body: JSON.stringify(updatedData),
                });
                if (response.ok) {
                    setUsers((prevUsers) => {
                        const updatedUsers = prevUsers.map((user) =>
                            user.uuid === editUser.uuid ? { ...user, ...updatedData } : user
                        );
                        return updatedUsers;
                    });
                    setIsEditing(false);
                    setToastType('success');
                    setToastMessage(`${newData.newUsername}'s profile has been successfully updated.`);
                    setShowToast(true);
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    const toggleDeleteConfirmation = () => {
        setIsDeleteConfirmationOpen((prevState) => !prevState);
    };
    const DeleteConfirmationPopup = () => {
        return (
            isDeleteConfirmationOpen && (
                <div className="delete-modal-overlay" >
                    <div className="delete-confirmation-popup" >
                        <h3>Confirm Deletion</h3>
                        <p>Are you sure you want to delete the selected users?</p>
                        <div className="delete-confirmation-buttons" >
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                    handleDeleteSelected(); // Call the delete function if confirmed
                                    toggleDeleteConfirmation();
                                    // Close the confirmation popup
                                }}
                            >
                                Confirm
                            </button>
                            <button
                                type="button"
                                className="btn btn-light"
                                onClick={() => toggleDeleteConfirmation()} // Close the confirmation popup if canceled
                            >
                                Cancel
                            </button>
                        </div>
                    </div >
                </div>
            )
        );
    };
    // delete selected
    const handleDeleteSelected = () => {
        if (selectedRows.length > 0) {
            try {
                // Create an array of promises for each selected user to be deleted
                const deletePromises = selectedRows.map((row) => {
                    return fetch(`http://localhost:8000/api/caduser_admin_dtl/${row.uuid}/`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": 'Token 3a4ff6be723c9dc5a8fe26f0e006389be122c198',
                        },
                    });
                });
                // Wait for all delete requests to complete
                Promise.all(deletePromises)
                    .then(() => {
                        // Remove the deleted users from the local state
                        const updatedUsers = users.filter((user) => !selectedRows.some((selected) => selected.uuid === user.uuid));
                        setUsers(updatedUsers);
                        setToastType('success');
                        setShowToast(true);
                        setToastMessage(`The selected user has been successfully terminated`);
                        setSelectedRows([]);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const handleDelete = (row) => {
        // Implement your delete logic here, for example, show a confirmation dialog
        console.log('Delete clicked for user:', row);
        setSelectedRow(null); // Clear selected row after deleting
        // Set the user to be deleted in state
        setUserToDelete(row);
        // Show the delete modal
        setIsDeleteModalOpen(true);
    };

    const DeleteModal = () => {
        if (userToDelete) {
            return (
                <div className="delete-modal-overlay" >
                    <div className="delete-modal">
                        <h1>Delete User</h1> <br />
                        <p>Username: {userToDelete.username}</p>
                        <p>Name: {userToDelete.first_name} {userToDelete.last_name}</p>
                        <p>Email: {userToDelete.email}</p>
                        <div className="delete-modal-buttons" >
                            <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
                            <button type="button" className="btn btn-light" onClick={handleCloseDeleteModal}>Cancel</button>
                        </div>
                    </div>
                </div >
            );
        }
        return null;
    };

    const handleCloseDeleteModal = () => {
        // Clear the user to be deleted and hide the delete modal
        setUserToDelete(null);
        setIsDeleteModalOpen(false);
    };

    // single delete
    const handleConfirmDelete = async () => {
        if (userToDelete) {
            try {
                const response = await fetch(`http://localhost:8000/api/caduser_admin_dtl/${userToDelete.uuid}/`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": 'Token 3a4ff6be723c9dc5a8fe26f0e006389be122c198',
                    },
                });
                if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
                // Remove the deleted user from the local state
                const updatedUsers = users.filter((user) => user.uuid !== userToDelete.uuid);
                setUsers(updatedUsers);
                setToastType('success');
                setShowToast(true);
                setToastMessage(`${userToDelete.username} has been successfully terminated`);
                // Close the delete modal
                handleCloseDeleteModal(true);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    const customStyles = {
        rows: {
            style: {
                backgroundColor: '#00286c', // Default background color for rows
                display: 'flex',
                fontSize: '15px',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                color: 'white',
            },
        },
        headCells: {
            style: {
                justifyContent: 'center',
                backgroundColor: '#00286c',
                fontSize: '15px',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                color: 'white',
            },
        },
        cells: {
            style: {
                justifyContent: 'center',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            },
        },
        pagination: {
            style: {
                backgroundColor: 'white',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            },
        },
    };
    // body css
    const containerStyle = {
        backgroundImage: 'url(https://media.istockphoto.com/id/1334947575/vector/law-enforcement-police-abstract-background.jpg?s=612x612&w=0&k=20&c=4X68xWUWmWYCWiyjclMn5xj0e1zYxN41XYBYxYgnTGQ=)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        padding: '50px 150px',
        flexDirection: 'column',
        minHeight: '100vh',
    };
    // search css
    const searchInput = {
        marginBottom: '10px',
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid black',
        width: '200px', /* Adjust the width as needed */
        padding: '5px',
        borderRadius: '20px',
        marginRight: '10px', /* Add right margin to create space on the right */
        float: 'right', /* Float it to the right corner */
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    }
    // filter css
    const filter = {
        marginBottom: '10px',
        cursor: 'pointer',
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid grey',
        width: '150px', /* Adjust the width as needed */
        padding: '5px',
        borderRadius: '20px',
        marginRight: '10px', /* Add right margin to create space on the right */
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    }
    // clear red button css
    const clearButtonStyle = {
        marginTop: '20px',
        padding: '5px',
        float: 'right',
        width: '100px',
        border: '2px solid white',
    }
    // car gif moving
    const carMoveKeyframes = `
    @keyframes carMove {
    from {
       transform: translateX(-200%);
    }
    to {
        transform: translateX(250%);
      }
    }`;
    // robber gif moving
    const robberMoveKeyframes = `
    @keyframes robberMove {
    from {
        transform: translateX(-200%);
    }
    to {
        transform: translateX(500%);
      }
    }`;
    // car css
    const carStyle = {
        width: '400px',
        height: '200px',
        animation: 'carMove 4s linear infinite',
    }
    // robber css
    const robberStyle = {
        width: '200px',
        height: '200px',
        animation: 'robberMove 4s linear infinite',
    }

    return (
        <>
            <div style={containerStyle}>
                <Notification show={showToast} message={toastMessage} type={toastType} onClose={handleClose} />
                <h1 style={{ color: 'white', textAlign: 'center', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', }}>All Users Record</h1><br /><br />
                {/* display table  */}
                <div className='table'>
                    <label style={{ color: 'white' }} >Filter by : </label>
                    <select onChange={handleFilterChange} value={selectedFilter} style={filter}>
                        <option value="all">All Fields</option>
                        <option value="username">Username</option>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                        <option value="email">Email</option>
                    </select>
                    <input
                        type="text"
                        placeholder="   Search..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        style={searchInput}
                    />
                </div>
                <div className='table'>
                    <div className="delete-selected-button">
                    </div>
                    <DataTable
                        columns={columns}
                        data={filteredUsers}
                        customStyles={customStyles}
                        pagination={customStyles}
                        selectableRows
                        selectableRowsHighlight
                        onSelectedRowsChange={(state) => { setSelectedRows(state.selectedRows); }}
                        striped
                    />
                    {/* clear button - unfinished*/}
                    <button className="btn btn-danger" style={clearButtonStyle} onClick={() => toggleDeleteConfirmation()} disabled={selectedRows.length === 0}>Clear</button>
                    <DeleteModal />
                    <DeleteConfirmationPopup />
                </div>
                {/* for animation only */}
                <style>{robberMoveKeyframes}</style>
                <style>{carMoveKeyframes}</style>
                <div className='berkejaran'>
                    <img src='/images/police.gif' alt="movingCar" style={carStyle} />
                    <img src='/images/robber.gif' alt="rob" style={robberStyle} />
                </div>
                <EditForm
                    isEditing={isEditing}
                    editUser={editUser}
                    newData={newData}
                    handleFieldChange={handleFieldChange}
                    handleSave={handleSave}
                    handleCloseEditForm={handleCloseEditForm}
                />
            </div>
            <style>
                {`  .delete-modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 1001; /* Higher z-index to appear above DataTable */
                    }                    
                    .delete-modal {
                        background-color: white;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
                        text-align: center;
                        max-width: 100%;
                        z-index: 1002; /* Ensure modal appears above overlay */
                    }                                       
                    .delete-modal button {
                        margin: 0 25px;
                        padding: 5px 15px;
                        border: none;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    .delete-confirmation-popup {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: white;
                        padding: 15px 15px ;
                        border-radius: 10px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
                        text-align: center;
                        max-width: 80%;
                        z-index: 1002;
                    }                    
                    .delete-confirmation-popup h3 {
                        margin-bottom: 40px;
                    }                    
                    .delete-confirmation-buttons {
                        margin-top: 50px;
                    }                    
                    .delete-confirmation-buttons button {
                        margin: 0 25px;
                        padding: 5px 15px;
                        width: 30%;
                        border: none;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    `}
            </style>
        </>
    );
}