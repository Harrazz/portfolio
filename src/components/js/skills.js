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
                <div class="wrap">
                    <p class="text-center">
                        <span className="icon">
                            <i className="bi bi-code"></i>
                        </span>
                        <span className="text">
                            Programming Skills
                        </span>
                    </p>
                    <div class="bars">
                        <div>
                            <p className="bar">HTML 80%</p>
                            <div class="progress-bar2 progress-bar-80" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">CSS 80%</p>
                            <div class="progress-bar2 progress-bar-80" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">JavaScript 70%</p>
                            <div class="progress-bar2 progress-bar-70" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">C++ 70%</p>
                            <div class="progress-bar2 progress-bar-70" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">Java 60%</p>
                            <div class="progress-bar2 progress-bar-60" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">Python 60%</p>
                            <div class="progress-bar2 progress-bar-60" style={{ marginRight: '12px' }}></div>
                        </div>

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
                <div class="circle-container">
                    <div class="circle percentage-60">
                        <span class="percentage">60%</span>
                        <span class="software">Photoshop</span>
                        <div class="percentage-bar"></div>
                    </div>

                    <div class="circle percentage-80">
                        <span class="percentage">80%</span>
                        <span class="software">Canva</span>
                        <div class="percentage-bar"></div>
                    </div>

                    <div class="circle percentage-75">
                        <span class="percentage">75%</span>
                        <span class="software">Microsoft Office</span>
                        <div class="percentage-bar"></div>
                    </div>

                    <div class="circle percentage-60">
                        <span class="percentage">60%</span>
                        <span class="software">Illustrator</span>
                        <div class="percentage-bar"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;