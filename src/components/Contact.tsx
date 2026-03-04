import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <Box className="contact-info">
            <div className="info-item">
              <EmailIcon />
              <div className="info-details">
                <span>EMAIL</span>
                <h4>harissaleem460@gmail.com</h4>
              </div>
            </div>

            <div className="info-item">
              <PhoneIcon />
              <div className="info-details">
                <span>PHONE</span>
                <h4>+92 301 7309112</h4>
              </div>
            </div>

            <div className="info-item">
              <LinkedInIcon />
              <div className="info-details">
                <span>LINKEDIN</span>
                <h4><a href="https://www.linkedin.com/in/haris-engineer/" target="_blank" rel="noreferrer">Haris Saleem</a></h4>
              </div>
            </div>

            <div className="info-item">
              <LocationOnIcon />
              <div className="info-details">
                <span>LOCATION</span>
                <h4>Pakistan PK</h4>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;