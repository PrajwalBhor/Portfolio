import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImage from "../Images/P111.png";
import videoBg from "../Images/v11.mp4";

import "./HomePage.css";
import Navbar from "../Components/Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Project";
import Contact from "./Contact";

const HomePage = () => {
  const [changingText, setChangingText] = useState("Programmer");

  useEffect(() => {
    const words = ["Programmer", "Coder", "Developer"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setChangingText(words[index]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">
      <div className="homepage">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={videoBg} type="video/mp4" />
        </video>

        <Navbar />

        <div className="floating-content">
          <div className="info-box">
            <h1>Prajwal Dattatray Bhor</h1>
            <h2>I'm a <span className="changing-text">{changingText}</span></h2>
            <h3>
              🚀 Passionate about building scalable web applications and dynamic user interfaces.
              💡 Turning ideas into reality with clean, efficient, and responsive code.
            </h3>

            <button className="download-btn">Download CV</button>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/prajwal-bhor-90155724b/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/PrajwalBhor" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="mailto:prajwal.bhor002@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/_prajwal_2k2" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://t.me/Prajwal_Bhor" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          <div className="profile-box">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
        <Element name="home"><HomePage/></Element>

        <Element name="about"><About /></Element>
        <Element name="education"><Education /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="contact"><Contact /></Element>
      </div>
    </section>
  );
};

export default HomePage;
