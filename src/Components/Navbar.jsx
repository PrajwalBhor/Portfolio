import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ["Home", "About", "Education", "Projects", "Skills", "Contact"];

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {sections.map((section, index) => (
          <li key={index}>
            <ScrollLink 
              to={section.toLowerCase()} 
              smooth={true} 
              duration={500} 
              offset={-50}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {section}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
