import React, { useState } from 'react';
import './navbar.css';
import './header.css';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Set the default active index to 2 for "Home"

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <div>
            <header className="header">
                <h2 class="logo">Harraz</h2>
            </header>


            <div className="navbarWrapper">
                <nav className="navigation">
                    <ul>
                        <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
                            <a href="#profile" onClick={() => handleClick(0)}>
                                <span className="icon">
                                    <i className="bi bi-person-fill"></i>
                                </span>
                                <span className="text">
                                    Profile
                                </span>
                            </a>
                        </li>

                        <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
                            <a href="#skills" onClick={() => handleClick(1)}>
                                <span className="icon">
                                    <i className="bi bi-book-fill"></i>
                                </span>
                                <span className="text">
                                    Skills
                                </span>
                            </a>
                        </li>

                        <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
                            <a href="#home" onClick={() => handleClick(2)}>
                                <span className="icon"><i className="bi bi-house-door-fill"></i></span>
                                <span className="text">Home</span>
                            </a>
                        </li>

                        <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
                            <a href="#projects" onClick={() => handleClick(3)}>
                                <span className="icon">
                                    <i className="bi bi-pc-display"></i>
                                </span>
                                <span className="text">
                                    Projects
                                </span>
                            </a>
                        </li>

                        <li className={`list ${activeIndex === 4 ? 'active' : ''}`}>
                            <a href="#contact" onClick={() => handleClick(4)}>
                                <span className="icon">
                                    <i className="bi bi-telephone-fill"></i>
                                </span>
                                <span className="text">
                                    Contact
                                </span>
                            </a>
                        </li>
                        <div className="indicator"></div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
