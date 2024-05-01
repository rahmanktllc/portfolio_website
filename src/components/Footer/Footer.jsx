import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
    return (
        <div className='footer'>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/a-rahman-hussain/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/ar3hma786" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.instagram.com/a_rahman_hussain/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon" />
                </a>
                <a href="mailto:arahmanhussain786@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon" />
                </a>
            </div>
            <p className="copyright display-4" style={{ fontSize: 'small', marginTop: "30px" }}>© 2024 Abdul Rahman Hussain. All rights reserved.</p>
        </div>
    );
}

export default Footer;
