import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileFooter.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const MobileFooter = () => {
  const [socialDrawerOpen, setSocialDrawerOpen] = useState(false);

  // Contact information
  const contactInfo = {
    phone: "+1 (555) 123-4567",
    whatsapp: "+15551234567",
    email: "info@constructionrepair.com",
  };

  const toggleSocialDrawer = (e) => {
    e.preventDefault();
    setSocialDrawerOpen(!socialDrawerOpen);
  };

  return (
    <div className="mobile-footer">
      <Link to="/" className="mobile-footer-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mobile-footer-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <span>Home</span>
      </Link>

      <a href={`tel:${contactInfo.phone}`} className="mobile-footer-item">
        <FaPhoneAlt className="mobile-footer-icon" />
        <span>Call</span>
      </a>

      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-footer-item"
      >
        <FaWhatsapp className="mobile-footer-icon whatsapp" />
        <span>WhatsApp</span>
      </a>

      <a href={`mailto:${contactInfo.email}`} className="mobile-footer-item">
        <FaEnvelope className="mobile-footer-icon" />
        <span>Email</span>
      </a>

      <Link to="/contact" className="mobile-footer-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mobile-footer-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
        <span>Contact</span>
      </Link>

      <div className={`social-drawer ${socialDrawerOpen ? "active" : ""}`}>
        <button className="social-drawer-toggle" onClick={toggleSocialDrawer}>
          <span className="toggle-icon">+</span>
          <span className="toggle-label">Social</span>
        </button>
        <div className="social-drawer-content">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
