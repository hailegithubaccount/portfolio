import React, { useState } from 'react';
import "./Banner.css";
import { ReactTyped } from "react-typed";


function Banner() {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleClick = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className={`main ${isSwapped ? 'swapped' : ''}`} onClick={handleClick}>
      <div className={`main-left ${isSwapped ? 'hidden' : ''}`}>
        
              <h1><span>
                Hello! I'm <ReactTyped
      className="Haile"
      strings={["Haile Michael Eshetu", "", ""]}
      typeSpeed={50}
      backSpeed={30}
      loop
    /></span> 
    <h2> I am a React Native and React (Vite) Developer</h2>
    </h1>
       
        <button className='btn'>
          read more
        </button>
       
      </div>
      <div className={`main-right ${isSwapped ? 'visible' : ''}`}>
        <img src="src/assets/hero_image_back.png" alt="Banner" className='banner-image1' />
        <img src="src/assets/one.png" alt="Banner" className='banner-image' />
    
       
      </div>
    </div>
  );
}

export default Banner;