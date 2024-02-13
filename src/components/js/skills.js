import React from "react";
import '../css/skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <br></br>
            <div className="section-text">
                <span class="letter"><i className="bi bi-book-fill" style={{ marginRight: '12px' }}></i></span>
                <span class="letter">S</span>
                <span class="letter">k</span>
                <span class="letter">i</span>
                <span class="letter">l</span>
                <span class="letter">l</span>
                <span class="letter">s</span>
            </div>

            <br></br>
            <div className="skill-container">
                <p class="text-center">
                    <span className="icon">
                        <i className="bi bi-code"></i>
                    </span>
                    <span className="text">
                        Programming Skills
                    </span>
                </p>
                <div className="row">
                    <div className="skills">
                        <i className="bi bi-filetype-html"></i>
                        <h2>HTML</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-filetype-css"></i>
                        <h2>CSS</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-filetype-js"></i>
                        <h2>JAVASCRIPT</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-filetype-cs"></i>
                        <h2>C++/C</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-filetype-java"></i>
                        <h2>JAVA</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-filetype-py"></i>
                        <h2>PYTHON</h2>
                    </div>
                </div>

                <br></br>
                <hr></hr>
                <br></br>

                <p class="text-center">
                    <span className="icon">
                        <i className="bi bi-laptop"></i>
                    </span>
                    <span className="text">
                        Software Skills
                    </span>
                </p>
                <div className="row">
                    <div className="skills">
                        <i className="bi bi-camera"></i>
                        <h2>ADOBE PHOTOSHOP</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-emoji-laughing"></i>
                        <h2>ADOBE ILLUSTRATOR</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-easel"></i>
                        <h2>CANVA</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-file-earmark-ppt"></i>
                        <h2>MICROSOFT POWERPOINT</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-file-earmark-word"></i>
                        <h2>MICROSOFT WORD</h2>
                    </div>
                    <div className="skills">
                        <i className="bi bi-file-earmark-excel"></i>
                        <h2>MICROSOFT EXCEL</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;