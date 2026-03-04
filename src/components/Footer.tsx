import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:harissaleem460@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
        <a href="https://www.linkedin.com/in/haris-saleem" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://react-portfolio-template-master.vercel.app/" target="_blank" rel="noreferrer">Haris Saleem</a> with 💜</p>
    </footer>
  );
}

export default Footer;