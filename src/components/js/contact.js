import React, { useEffect, useState } from 'react'
import '../css/contact.css';
import bgcontact from '../../assets/contact.png'

const Contact = () => {
    return (
        <section id='contact'>
            <br></br>
            <div className="section-text">
                <span class="letter"><i className="bi bi-telephone-fill" style={{ marginRight: '12px' }}></i></span>
                <span class="letter">C</span>
                <span class="letter">o</span>
                <span class="letter">n</span>
                <span class="letter">t</span>
                <span class="letter">a</span>
                <span class="letter">c</span>
                <span class="letter">t</span>
                <span class="letter">s</span>
            </div>

            <br></br>
            <div className="contact-container">
                <div class="section-header">
                    <h2 className='contactme'>Contact Me</h2>
                    <p>Hi! welcome to my contact section. I appreciate your interest in connecting with me. Whether you have questions, feedback, or you just want to say hello, I'd love to hear from you</p>
                </div>

                <div class="row">
                    <div class="contact-info">
                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i className="bi bi-house-door-fill"></i>
                            </div>
                            <div class="contact-info-content">
                                <h4>Address</h4>
                                <p>Sungai Tangkas<br /> Bandar Baru Bangi, <br />43000</p>
                            </div>
                        </div>

                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i class="bi bi-telephone-fill"></i>
                            </div>
                            <div class="contact-info-content">
                                <h4>Phone</h4>
                                <p>+60 10 400 8072</p>
                            </div>
                        </div>

                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i class="bi bi-envelope-fill"></i>
                            </div>
                            <div class="contact-info-content">
                                <h4>Email</h4>
                                <p>muhdharrazz03@gmail.com</p>
                            </div>
                        </div>

                        <hr></hr>

                        <div class="contact-info-item">
                            <a href="https://twitter.com/hariries_" target="_blank">
                                <i class="bi bi-twitter-x"></i>
                            </a>
                            <a href="https://www.instagram.com/hrrzhariri/" target="_blank">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCLJ4mmdSFAAaDINVJlI8xXg" target="_blank">
                                <i class="bi bi-youtube"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100084007672875" target="_blank">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>                
                    <img src={bgcontact} alt="profile" className="bgcontact" id="bgcontact" />
                </div>
            </div>

        </section >
    );
}

export default Contact;