import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../assets/styles/Footer.scss";

const quickLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-block footer-brand">
          <h2>Haris Saleem</h2>
          <p>
            Full Stack Developer focused on scalable web solutions with React,
            Laravel, and WordPress custom development.
          </p>
          <a
            className="footer-cta"
            href="mailto:harissaleem460@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Let&apos;s Work Together
          </a>
        </div>

        <div className="footer-block">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-block">
          <h3>Core Services</h3>
          <ul>
            <li>Custom Web Development</li>
            <li>WordPress Solutions</li>
            <li>Frontend Engineering</li>
            <li>API Integration</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        <div className="footer-block">
          <h3>Contact</h3>
          <p>Email: harissaleem460@gmail.com</p>
          <p>Location: Karachi, Pakistan</p>
          <div className="footer-socials">
            <a
              href="mailto:harissaleem460@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Haris Saleem"
            >
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/haris-saleem"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Haris Saleem. All rights reserved.</p>
        <button type="button" className="to-top-btn" onClick={handleBackToTop}>
          <ArrowUpwardIcon />
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
