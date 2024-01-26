import React, { useState } from 'react';
import '../css/profiles.css';

const Profiles = () => {
    const [activeTab, setActiveTab] = useState('edu');
    const openTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section id='profiles'>
            <br></br>
            <div className="section-text">
                <span class="letter"><i className="bi bi-person-fill" style={{ marginRight: '8px' }}></i></span>
                <span class="letter">P</span>
                <span class="letter">r</span>
                <span class="letter">o</span>
                <span class="letter">f</span>
                <span class="letter">i</span>
                <span class="letter">l</span>
                <span class="letter">e</span>
                <span class="letter">s</span>
            </div>

            <br></br>
            <div className="profile-container">
                <div className='prow'>
                    <div className="profile-col-1">
                    </div>
                    <div className="profile-col-2">
                        <h1 className='aboutme'>About Me</h1><br/>
                        <p className='ptext'> I am a practical trainee in the field of computer and information sciences at GFIS Sdn. Bhd. in order to experience the workplace environment as well as for self-development.</p>
                        <br/>
                        <div className="tab-titles">
                            <p className={`tab-subtitle ${activeTab === 'edu' ? 'p-active-link' : ''}`}
                                onClick={() => openTab('edu')}>
                                Education
                            </p>
                            <p className={`tab-subtitle ${activeTab === 'exp' ? 'p-active-link' : ''}`}
                                onClick={() => openTab('exp')}>
                                Experience
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'edu' ? 'active-tab' : ''}`} id="edu">
                            <ul>
                                <h2>Oct 2021 - Now</h2>
                                <li><span>Diploma In Computer Science</span><br />Dean List<br />Universiti Teknologi MARA (UiTM), Arau, Perlis</li>
                                <br />
                                <h2>Jan 2019 - March 2021</h2>
                                <li><span>SPM</span><br />5A <br />Sekolah Menengah Sri Al-Amin Bangi</li>
                                <br />
                                <h2>Jan 2016 - Dec 2018</h2>
                                <li><span>PT3</span><br />7A <br />Sekolah Menengah Sri Al-Amin Bangi</li>
                                <br />
                                <h2>Jan 2010 - Dec 2015</h2>
                                <li><span>UPSR</span><br />4A <br />Sekolah Rendah Sri Al-Amin Bangi</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'exp' ? 'active-tab' : ''}`} id="exp">
                            <ul>
                                <div className='box'>
                                    <h2>18 Sept 2023 - 01 March 2024</h2>
                                    <li><span>Cyberjaya, Selangor</span><br />Internship at GFIS Innovative Solutions Sdn Bhd</li>
                                    <br />
                                </div>
                                <div className='box'>
                                    <h2>August 2021 - July 2023</h2>
                                    <li><span>Arau, Perlis</span><br />Multimedia / Photographer for COSMITs event in UiTM</li>
                                    <br />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profiles;