import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faWordpress } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "SASS",
    "Redux",
    "Axios/Fetch"
];

const labelsSecond = [
    "Laravel",
    "PHP",
    "Node.js",
    "MySQL",
    "RESTful APIs",
    "MVC Architecture"
];

const labelsThird = [
    "WordPress",
    "WooCommerce",
    "Theme Customization",
    "Plugin Development",
    "Elementor",
    "SEO"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Frontend Web Development</h3>
                        <p>Building responsive single-page applications (SPA) using React.js. Advanced proficiency in ES6+ features, asynchronous programming, Bootstrap for fully responsive, mobile-first layouts, and expert CSS3 skills.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faNodeJs} size="3x" />
                        <h3>Backend Development</h3>
                        <p>Developing robust, secure, and high-performance server-side solutions using Laravel with MVC architecture, PHP, and Node.js. Experienced with event-driven architectures and seamless database integrations.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faWordpress} size="3x" />
                        <h3>CMS & E-Commerce</h3>
                        <p>Specialized in custom WordPress website development, handling both front-end and back-end building. Expert in customizing themes and plugins to meet client-specific requirements and enhance functionality.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;