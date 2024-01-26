import React, { useEffect } from "react";
import '../css/home.css';
import resume from '../../assets/resume.pdf'
import bg from '../../assets/bg.png'

const Home = () => {
    const handleClick = (index) => {
    }

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.setAttribute('download', 'resume.pdf'); // Specify the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    //for image animation
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            const bg = document.getElementById('bg');

            bg.style.transform = `translateX(${scrollValue * 1.5}px)`;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // typing effect
    useEffect(() => {
        // Your JavaScript code goes here
        const dynamicText = document.querySelector("p1 span");
        const words = ["Student", "Gamer", "Programmer", "Designer"];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeEffect = () => {
            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            dynamicText.textContent = currentChar;
            dynamicText.classList.add("stop-blinking");

            if (!isDeleting && charIndex < currentWord.length) {
                // If condition is true, type the next character
                charIndex++;
                setTimeout(typeEffect, 200);
            } else if (isDeleting && charIndex > 0) {
                // If condition is true, remove the previous character
                charIndex--;
                setTimeout(typeEffect, 100);
            } else {
                // If word is deleted then switch to the next word
                isDeleting = !isDeleting;
                dynamicText.classList.remove("stop-blinking");
                wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
                setTimeout(typeEffect, 1200);
            }
        }

        typeEffect();
    }, []); // The empty dependency array means this effect will only run once on mount

    return (
        <section id="home" className="home">
            <br></br>
            <div className="homeContent">
                <p className="hello">Hello,</p>
                <p className="name"> my name is</p>
                <p className="myname">Harraz</p>
                <p className="intro">I am</p>
                <div className="container">
                    <p1><span className="iam"></span></p1>
                </div>
                <p className="introPara">I am a student of diploma in Computer Science at UiTM Arau</p>

                <div className="button-container">
                <a href="#contact" onClick={() => handleClick(4)}>
                        <button class="pushable">
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front">
                                <span className="icon">
                                    <i className="bi bi-telephone-fill"></i>
                                </span>
                                <span className="text">
                                    Contact
                                </span>
                            </span>
                        </button>
                    </a>
                    <button class="pushable" style={{ marginLeft: '10px' }} onClick={handleDownloadCV}>
                        <span class="shadow"></span>
                        <span class="edge"></span>
                        <span class="front">
                            <span className="icon">
                                <i className="bi bi-download"></i>
                            </span>
                            <span className="text">
                                CV
                            </span>
                        </span>
                    </button>
                </div>

                <div class="shape-blob"></div>
                <div class="shape-blob one"></div>
                <div class="shape-blob two"></div>
                <div class="shape-blob three"></div>
            </div>
            <img src={bg} alt="profile" className="bg" id="bg" />
        </section>
    )
}
export default Home;