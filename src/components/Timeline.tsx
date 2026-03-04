import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container" id="experience">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="11/2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Quickers Venture, Karachi</h4>
            <p>
              Developed scalable web applications using React.js and Laravel following modern MVC architecture principles.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2024 - 09/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack WordPress Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Prosperiq Media Agency, Rawalpindi</h4>
            <p>
              Developed and maintained custom WordPress websites, handling both front-end and back-end development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2023 - 06/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer (Remote)</h3>
            <h4 className="vertical-timeline-element-subtitle">Exponent Engineers Limited, Karachi</h4>
            <p>
              Developed scalable single-page applications (SPAs) using React.js and integrated RESTful APIs using Axios/Fetch.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="items-container" id="certifications">
        <h1>Certifications</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Web Development Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Exponent Engineers Limited</h4>
            <p>
              Utilized HTML, CSS, and JavaScript skills in real world projects during my internship, advancing proficiency in frontend web development. Implemented the Bootstrap and React framework and applied responsive design techniques to enhance user interface and user experience during internship projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Web Development Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Tek Unity Software House</h4>
            <p>
              Contributed to WordPress development projects during internship, gaining valuable hands-on experience in web development and customization.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="items-container" id="education">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="11/2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master's In Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">NED University of Engineering & Technology, Karachi</h4>
            <p>
              Pursuing a Master's focused on advanced computing, cybersecurity, and data management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2020 - 07/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">COMSATS University, Islamabad</h4>
            <p>
              Graduated with strong academic proficiency and technical skills in software development and project management.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
