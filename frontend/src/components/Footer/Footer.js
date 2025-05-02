import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  // Get current year for copyright text
  const currentYear = new Date().getFullYear();

  // Company contact information
  const contactInfo = {
    address: "29 DESKER ROAD #01-01, SINGAPORE 209562",
    phone: "+6585402370",
    email: "asadservice88@gmail.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  };

  // Social media links
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com" },
    { name: "Pinterest", icon: <FaPinterestP />, url: "https://pinterest.com" },
  ];

  // Quick links for navigation
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  // Service links
  const serviceLinks = [
    { name: "Plumbing", path: "/services/plumbing-service" },
    { name: "Electrical", path: "/services/electrical-service" },
    { name: "Painting", path: "/services/painting-service" },
    { name: "AC Repair", path: "/services/ac-repairing" },
    { name: "Construction", path: "/services/construction-work" },
  ];

  return (
    <footer className="footer-container">
      {/* Top Footer with Contact Info and Social Links */}
      <div className="footer-top">
        <div className="container mx-auto px-4">
          <div className="social-bar">
            <div className="contact-info">
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>{contactInfo.email}</span>
              </div>
            </div>

            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container mx-auto px-4">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <h3 className="footer-heading">Construction & Repair</h3>
              <p className="footer-description">
                Professional construction and repair services for residential
                and commercial projects. We provide high-quality workmanship and
                exceptional customer service.
              </p>
              <div className="footer-address">
                <FaMapMarkerAlt className="address-icon" />
                <p>{contactInfo.address}</p>
              </div>
              <p className="footer-hours">{contactInfo.hours}</p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-links">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h3 className="footer-heading">Subscribe</h3>
              <p className="newsletter-text">
                Subscribe to our newsletter to receive updates and special
                offers
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                  aria-label="Newsletter email"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Copyright and Social Links */}
      <div className="footer-bottom">
        <div className="container mx-auto px-4">
          <div className="footer-bottom-content">
            <div className="copyright">
              &copy; {currentYear} Construction & Repair Services. All Rights
              Reserved.
            </div>
            <div className="bottom-social-icons">
              {socialLinks.slice(0, 4).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bottom-social-icon"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
