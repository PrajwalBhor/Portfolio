import React from "react";
import './WelcomePage.css';
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import { motion } from 'framer-motion/client';

const WelcomePage = () => {

    const navigate = useNavigate();
    

    return (
        <div className="welcome-container">
        <div className="welcome-text">
          <div className="line-1">Heyy I'm</div>
          <div className="line-2">
            {['P', 'R', 'A', 'J', 'W', 'A', 'L'].map((letter, index) => (
              <span key={index} className={`jumping-letter letter-${index + 1}`}>{letter}</span>
            ))}
          </div>
          <div className="line-3">Welcome  to  my</div>
          <div className="line-4">Portfolio</div>
          <button className="lets-go-button" onClick={() => navigate ("/home")}>Let's Go</button>
        </div>
      </div>
    );
  };

export default WelcomePage;