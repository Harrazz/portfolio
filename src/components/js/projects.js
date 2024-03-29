import React, { useState } from 'react';
import '../css/projects.css';
import workImg1 from '../../assets/brochure.png';
import workImg2 from '../../assets/portfolio.png';
import workImg3 from '../../assets/photobooth.png';
import workImg4 from '../../assets/backdrop-AN.png';
import workImg5 from '../../assets/Demo PTA.png';

const projectData = [
    { image: workImg1, title: 'DIGITAL BROCHURE', code: 'https://github.com/Harrazz/BrochureV2', view: 'https://gfis-online-brochure.netlify.app/#/home' },
    { image: workImg2, title: 'PORTFOLIO WEBSITE', code: 'https://github.com/Harrazz/portfolio', view: 'https://harraz.netlify.app/#home' },
    { image: workImg3, title: 'PHOTOBOOTH APP', code: 'https://github.com/Harrazz/PhotoboothApp_v2.0', view: 'https://photoboothappgfis.netlify.app/' },
    { image: workImg4, title: 'BACKDROP AN', code: 'https://github.com/Harrazz/Backdrop-AN', view: 'https://backdrop-an.netlify.app/' },
    { image: workImg5, title: 'PTA DEMO VIDEO', view: 'https://www.youtube.com/watch?v=p-jjWWIgy0k' },
    // { image: workImg4, title: '', info: 'text4', code: 'link', view: '' },
];

const Projects = () => {
    const [currentCard, setCurrentCard] = useState(0);

    const handleNext = () => {
        setCurrentCard((prevCard) => (prevCard + 1) % 5);
    };

    const handlePrev = () => {
        setCurrentCard((prevCard) => (prevCard - 1 + 5) % 5);
    };

    const transformValue = `translateX(${-currentCard * 100}%)`;

    return (
        <section id='projects'>
            <br></br>
            <div className="section-text">
                <span class="letter"><i className="bi bi-pc-display" style={{ marginRight: '12px' }}></i></span>
                <span class="letter">P</span>
                <span class="letter">r</span>
                <span class="letter">o</span>
                <span class="letter">j</span>
                <span class="letter">e</span>
                <span class="letter">c</span>
                <span class="letter">t</span>
                <span class="letter">s</span>
            </div>

            <br></br>
            <div className="project-container">
                <p className="sub-para">Let's explore a collection of projects I have worked on throughout my career. These demonstrate my skills and achievements. I look forward to discussing them with you.</p><br />
                <div className="slider">
                    <button className="w-prev" onClick={handlePrev}>
                        &lt;
                    </button>
                    <div className="cards" style={{ transform: transformValue }}>
                        {projectData.map((project, index) => (
                            <div key={index} className={`w-card ${currentCard === index ? 'open' : ''}`}>
                                <img src={project.image} alt={project.title} />
                                <div className="card-info">
                                    <h5>{project.title}</h5>
                                    <div className='card-info-link'>
                                        <br /><button onClick={() => window.open(project.code, '_blank')} className="link-button">
                                            Source Code
                                        </button>
                                        <button onClick={() => window.open(project.view, '_blank')} className="link-button">
                                            View Preview
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-next" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;