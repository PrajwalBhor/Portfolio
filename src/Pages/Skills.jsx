import React from "react";
import { FaReact, FaAngular, FaDynatrace, FaPython, FaJava, FaAws, FaDatabase, FaHtml5, FaCss3, FaGitAlt, FaJs, FaGithub } from "react-icons/fa";
import { SiMysql, SiWix, SiCplusplus, SiJquery } from "react-icons/si";
import dynatraceLogo from "../Images/dynatrace-icon.svg"
import "./Skills.css";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
      { name: "Python", icon: <FaPython className="skill-icon python" /> },
      { name: "SQL", icon: <SiMysql className="skill-icon sql" /> },
      { name: "Java", icon: <FaJava className="skill-icon java" /> },

    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "ReactJS", icon: <FaReact className="skill-icon react" /> },
      { name: "Angular", icon: <FaAngular className="skill-icon angular" /> },
      { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
      { name: "CSS", icon: <FaCss3 className="skill-icon css" /> },

    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="skill-icon mysql" /> },
      { name: "SQL", icon: <FaDatabase className="skill-icon database" /> },
    ],
  },
  {
    category: "Others",
    skills: [
      { name: "Git", icon: <FaGitAlt className="skill-icon git" /> },
      { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
      { name: "OOP", icon: <SiCplusplus className="skill-icon oop" /> },
     
      
    ],
  },
  {
    category: "APM - Tool",
    skills: [
      {
        name: "Dynatrace",
        icon: <img src={dynatraceLogo} alt="Dynatrace" className="skill-icon dynatrace" />
      },
    ],
  },
  {
    category: "Cloud Services",
    skills: [{ name: "AWS", icon: <FaAws className="skill-icon aws" /> }],
  },

  {
    category: "Wix - Studio",
    skills: [
      {
        name: "Wix Studio", icon: <SiWix className="skill-icon wix" />
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div className="skill-card" key={index}>
              <h2>{skillCategory.category}</h2>
              <div className="skill-icons">
                {skillCategory.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
