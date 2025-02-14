import React, { useState } from 'react';
import "./Banner.css";
import { ReactTyped } from "react-typed";

// Import FontAwesome icons from the correct library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";


// Import images correctly for React/Vite projects
import heroImageBack from "../assets/hero_image_back.png"; // Use absolute import
import profileImage from "../assets/one.png";

function Banner() {
  const [isSwapped, setIsSwapped] = useState(false);

  // Toggle swap effect
  const handleClick = () => {
    setIsSwapped(!isSwapped);
  };

  // Function to handle CV download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/haile.pdf"; // Make sure "haile.pdf" is in the "public" folder
    link.download = "Haile_Michael_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`main ${isSwapped ? 'swapped' : ''}`}>
      <div className={`main-left ${isSwapped ? 'hidden' : ''}`}>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/haile-michael-eshetu-5553422bb/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/hailegithubaccount" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>

        {/* Banner Text */}
        <h1>
          <span>
            Hello! I'm - 
            <ReactTyped
              className="Haile"
              strings={["Haile Michael Eshetu", ""]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </span> 
        </h1>
        <h2>I am a React Native and React (Vite) Developer</h2>

        {/* Button to Download CV */}
        <button 
  className="btn" 
  onClick={handleDownload}
  style={{ 
    backgroundColor: "red", 
    color: "white", 
    width: "100px", 
    height: "40px",
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer", 
    margin: "auto"  /* This centers it inside its flex container */
  }}>
  CV
</button>

      </div>
      
      {/* Right Side with Images */}
      <div className={`main-right ${isSwapped ? 'visible' : ''}`}>
        <img src={heroImageBack} alt="Background" className='banner-image1' />
        <img src={profileImage} alt="Profile" className='banner-image' />
      </div>
    </div>
  );
}

export default Banner;
