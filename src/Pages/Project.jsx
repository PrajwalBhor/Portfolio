import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import "./Project.css";
import video from "../Images/v12.mp4";

const projectData = [
  {
    id: 1,
    title: "Healthcare Management System",
    description: "A React-based web app for managing healthcare services.",
    inDetails: `
      • Developed a HealthCare Management System using React to manage healthcare services with add, update, delete, and restore functionalities.
      • Utilized React Router for seamless navigation between different sections like Add Service, Manage Services, and Trashbin.
      • Employed React hooks (useState, useEffect) for efficient state management of services and deleted items.
      • Built a user-friendly form with basic form validation for adding new services, ensuring all fields are required before submission.
      • Tech Stack - React, JavaScript, HTML, CSS.
    `,
    link: "https://healthcare-management-system-d1zs.onrender.com/",
  },
  {
    id: 2,
    title: "OCR Web App Services",
    description: "An OCR-based tool for text recognition from images.",
    inDetails: `
      • Developed a user-friendly OCR web app with five distinct services: text extraction, car license plate detection, government document validation, handwritten character recognition, and invoice reading.
      • Ensured seamless integration with PostgreSQL for efficient data storage and retrieval.
      • Utilized Django framework for the front-end, offering a responsive and visually appealing interface.
      • Integrated API for government document validation and implemented machine learning models for enhanced handwritten character recognition.
      • Enabled users to upload files easily for OCR tasks, providing real-time OCR services for quick results.
    `,
    link: "#",
  },
  {
    id: 3,
    title: "Business Website Replica",
    description: "A replica of a business website using Wix Studio.",
    inDetails: `
      • Developed a responsive website using Wix Studio, incorporating HTML, CSS, and design customizations.
      • Designed and implemented interactive features such as navigation, buttons, and multimedia elements to enhance user engagement.
      • Ensured the website adhered to modern web standards and optimized it for both desktop and mobile platforms.
      • Integrated company branding and created content sections for services, products, and company mission.
      • Tech Stack - Wix Editor, HTML, CSS.
    `,
    link: "https://thorsigniaglobal.wixstudio.io/my-site-101",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="project-page">
      {/* Background Video */}
      <video className="project-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      {/* Project Content */}
      <div className="project-content">
        <h1>My Projects</h1>
        <div className="project-container">
          {projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <button className="see-more" onClick={() => handleOpen(project)}>See More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Material-UI Dialog (Modal) */}
      <Dialog open={open} onClose={handleClose}>
        {selectedProject && (
          <>
            <DialogTitle>{selectedProject.title}</DialogTitle>
            <DialogContent>
              <p>{selectedProject.inDetails}</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Projects;
