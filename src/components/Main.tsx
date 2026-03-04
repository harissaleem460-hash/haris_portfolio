import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileImage from '../assets/images/Portfolio.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Haris Saleem" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:harissaleem460@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/haris-saleem" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Haris Saleem</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="mailto:harissaleem460@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/haris-saleem" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
