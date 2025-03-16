import React from "react";
import "./Education.css"; // Import CSS file

const Education = () => {
  const educationData = [
    {
      degree: "BSc in Computer Science",
      college: "PES's Modern College of Arts, Science, and Commerce, Ganeshkhind, Pune",
      year: "2020 - 2024",
      cgpa: "7.7",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      college: "G R P Sabnis College, Narayangaon",
      year: "2018 - 2020",
      percentage: "60.63%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      college: "Shree Vighnahar Vidyalaya, Ozar",
      year: "2018",
      percentage: "87.40%",
    },
  ];

  return (
    <section id="education" className="education-page">
      <h1 className="education-title">Education</h1>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h2 className="degree">{edu.degree}</h2>
            <p className="college">{edu.college}</p>
            <p className="year">📅 {edu.year}</p>
            {edu.cgpa ? <p className="score">🎓 CGPA: {edu.cgpa}</p> : null}
            {edu.percentage ? <p className="score">📊 Percentage: {edu.percentage}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
