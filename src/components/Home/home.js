import React, { useEffect, useRef } from "react";
import './home.css'
import bg from '../../assets/bg.png'
import bgleft from '../../assets/bgleft.png'

const Home = () => {

    const handleClick = (index) => {

    }
    
    //for image animation
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;

            const bg = document.getElementById('bg');
            const bgleft = document.getElementById('bgleft');

            bg.style.transform = `translateX(${scrollValue * 1.5}px)`;
            bgleft.style.transform = `translateX(-${scrollValue * 1.5}px)`;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // typing effect
    useEffect(() => {
        // Your JavaScript code goes here
        const dynamicText = document.querySelector("h1 span");
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
        <section id="home">
            <div className="homeContent">
                <span className="hello">Hello,</span>
                <span className="name"> my name is</span>
                <span className="myname">Harraz</span>
                <span className="intro">I am</span>
                <div className="container">
                    <h1><span className="iam"></span></h1>
                </div>
                <p className="introPara">I am a student of diploma in Computer Science at UiTM Arau</p>
                <a href="#contact" onClick={() => handleClick(4)}><button className="btn"><span className="icon">
                    <i className="bi bi-telephone-fill"></i>
                </span>
                    <span className="text">
                        Contact
                    </span></button></a>
            </div>
            <img src={bg} alt="profile" className="bg" id="bg" />
            <img src={bgleft} alt="profile" className="bgleft" id="bgleft" />
        </section>
    )
}

export default Home;