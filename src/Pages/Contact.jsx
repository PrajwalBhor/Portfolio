import React from "react";
import "./Contact.css";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaPhoneAlt, } from "react-icons/fa";

const Contact = () => {
  // Store contact details in environment variables
  const EMAIL = process.env.REACT_APP_EMAIL || "prajwal.bhor002@gmail.com";
  const WHATSAPP = process.env.REACT_APP_WHATSAPP || "919970509986";
  const INSTAGRAM = process.env.REACT_APP_INSTAGRAM || "_prajwal_2k2";
  const PHONE_NUMBER = process.env.REACT_APP_PHONE || "+919876543210";

  return (
    <div className="contact-page">
      <div>  <h1 className="contact-title">Contact Me</h1></div>
      <div className="contact-container">
        <div className="contact-icons">

          {/* call */}
          <a href={`tel:${PHONE_NUMBER}`} className="icon call">
            <FaPhoneAlt /> {/* Use a phone icon instead */}
          </a>
          
          {/* Gmail */}
          <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer" className="icon gmail">
            <FaEnvelope />
          </a>
          {/* WhatsApp */}
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="icon whatsapp">
            <FaWhatsapp />
          </a>
          {/* Instagram */}
          <a href={`https://www.instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="icon instagram">
            <FaInstagram />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
