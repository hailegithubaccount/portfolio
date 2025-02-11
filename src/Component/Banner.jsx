import React, { useState } from 'react';
import "./Banner.css";

function Banner() {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleClick = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className={`main ${isSwapped ? 'swapped' : ''}`} onClick={handleClick}>
      <div className={`main-left ${isSwapped ? 'hidden' : ''}`}>
        <p>
          I am a passionate website developer, bringing creative ideas to life through code.  
          With expertise in React, Vite, and Tailwind CSS, I build fast and responsive web applications.  
          I enjoy solving problems and optimizing user experiences for seamless interaction.  
          From frontend design to backend logic, I craft websites that are both functional and visually appealing.  
          Always eager to learn and innovate, I stay up to date with the latest web technologies.
        </p>
      </div>
      <div className={`main-right ${isSwapped ? 'visible' : ''}`}>
        <img src="src/assets/kk.jpg" alt="Banner" className='banner-image' />
      </div>
    </div>
  );
}

export default Banner;