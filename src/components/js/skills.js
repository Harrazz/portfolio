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
                            <p className="bar">HTML .progress-bar-10</p>
                            <div class="progress-bar2 progress-bar-10" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">CSS .progress-bar-20</p>
                            <div class="progress-bar2 progress-bar-20" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">Java .progress-bar-30</p>
                            <div class="progress-bar2 progress-bar-30" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">C++ .progress-bar-40</p>
                            <div class="progress-bar2 progress-bar-40" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">.progress-bar-50</p>
                            <div class="progress-bar2 progress-bar-50" style={{ marginRight: '12px' }}></div>
                        </div>
                        <div>
                            <p className="bar">.progress-bar-60</p>
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

                    <div class="circle percentage-12">
                        <span class="percentage">12%</span>
                        <span class="software">Canva</span>
                        <div class="percentage-bar"></div>
                    </div>

                    <div class="circle percentage-34">
                        <span class="percentage">34%</span>
                        <span class="software">VSCode</span>
                        <div class="percentage-bar"></div>
                    </div>

                    <div class="circle percentage-50">
                        <span class="percentage">50%</span>
                        <span class="software">Illustrator</span>
                        <div class="percentage-bar"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;