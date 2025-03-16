import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-page">
      <div className="about-container">
        <h1>About Me</h1>
        <p className="intro">
          Hi, I’m <span className="highlight">Prajwal Bhor</span>, a Frontend Developer based in Pune, Maharashtra. I’m passionate about building intuitive and user-friendly web applications that enhance user experiences. My love for technology and problem-solving keeps me motivated to learn and grow every day.
        </p>

        <div className="section">
          <h2>🌟 My Background</h2>
          <p>
            I was born and raised in Pune, a city known for its thriving IT industry and educational institutions. From a young age, I was fascinated by how websites function, which eventually led me to explore the world of web development.
          </p>
        </div>

        <div className="section">
          <h2>💡 What I Love About Tech</h2>
          <ul>
            <li>✔️ Creating seamless user experiences</li>
            <li>✔️ Learning and exploring new frontend frameworks</li>
            <li>✔️ Solving real-world problems through technology</li>
            <li>✔️ Constantly improving my skills in UI/UX design</li>
          </ul>
        </div>

        <div className="section">
          <h2>🎯 My Interests & Hobbies</h2>
          <ul>
            <li>🎮 Gaming – Exploring new worlds in video games</li>
            {/* <li>📖 Anime & Manga – Enjoying captivating stories</li> */}
            <li>🎵 Music – Keeping me motivated while working</li>
            <li>🛠️ Debugging & Problem-Solving – Finding solutions is fun for me!</li>
          </ul>
        </div>

        
      </div>
    </section>
  );
};

export default About;
