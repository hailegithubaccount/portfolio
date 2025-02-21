import React from 'react';

import cssLogo from '../assets/git.png'; 
import vite from '../assets/logo.svg'; 
import Laravel from '../assets/LL.png'; 
import reactnative from '../assets/react-native-1.svg'; // Adjusted path// Corrected import statement
import mysql from '../assets/mysqll.png'; 
import git from '../assets/gitk.png'; 
import githb from '../assets/githup.png'; 
import mongodb from  '../assets/mongog.png'; 
import html from  '../assets/html.png'; 
import css from  '../assets/css-logo.png'; 
import js from  '../assets/js.png'; 

import './Skill.css'; // Import your CSS file

const Skills = () => {
  return (
    <div>
 <div className='tsuf'>My skills</div>
    <div className="skills-section">
    
      <div className="skill">
        <img src={ reactnative} alt="CSS" className="skill-image" />
        <h3>react-native</h3>
      </div>
      <div className="skill">
        <img src={vite} alt="React Native" className="skill-image" />
        <h3>React vite</h3>
      </div>
      <div className="skill">
        <img src={Laravel} alt="HTML" className="skill-image" />
        <h3>Laravel</h3>
      </div>
      <div className="skill">
        <img src={mongodb} alt="CSS" className="skill-image" />
        <h3>mongodb</h3>
      </div>
  
      <div className="skill">
        <img src={mysql} alt="CSS" className="skill-image" />
        <h3>mysql</h3>
      </div>  
      <div className="skill">
        <img src={git} alt="React" className="skill-image" />
        <h3>git</h3>
      </div>
      <div className="skill">
        <img src={githb} alt="CSS" className="skill-image" />
        <h3>github</h3>
      </div>
      <div className="skill">
        <img src={html} alt="CSS" className="skill-image" />
        <h3>HTML</h3>
      </div>
      <div className="skill">
        <img src={css} alt="CSS" className="skill-image" />
        <h3>CSS</h3>
      </div>
      <div className="skill">
        <img src={js } alt="CSS" className="skill-image" />
        <h3>JS</h3>
      </div>
     
      
      
    </div>

    </div>
   
  );
};

export default Skills;
