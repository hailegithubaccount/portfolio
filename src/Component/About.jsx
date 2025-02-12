import React, { useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import kurd from "../assets/kk.jpg";
import hackton from "../assets/hackton.png";

 function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 3; // Assume there are 3 images in the list

  // Array of paragraph texts corresponding to each image
  const paragraphs = [
    "Hi, I'm Haile Michael Eshetu, a dedicated React and React Native developer with a passion for building modern and efficient applications",
    "I specialize in creating fast, scalable, and user-friendly web and mobile solutions, focusing on clean code, performance, and seamless user experiences.",
    "With a strong understanding of front-end and mobile development, I strive to turn innovative ideas into reality through technology."
  ];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalImages;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + totalImages) % totalImages;
    setCurrentIndex(previousIndex);
  };

  return (
    <div>
      <div className='Sboth'>
        <div className='SText'>
         
          <h2 className='SH2'> ABOUT Me</h2>
          <p className='sentence'>{paragraphs[currentIndex]}</p> {/* Render paragraph dynamically */}
         
        </div>
        <div class="container">
          <div class="rectangle1"></div>
          <div class="rectangle2"></div>
          <img 
            src={currentIndex === 0 ? hackton : currentIndex === 1 ? hackton  : hackton} 
            alt='' 
            className={
              currentIndex === 0 ? 'small-image' : 
              currentIndex === 1 ? 'medium-image' : 
              'large-image'
            }
          />
          <FontAwesomeIcon icon={faArrowLeft} className='icon1s' onClick={handlePrevious}/>
          <FontAwesomeIcon icon={faArrowRight} className='icon1s' onClick={handleNext}/>
        </div>
      </div>
    </div>
  );
}
export default About;