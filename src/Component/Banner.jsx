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
        
                            <h1>About me</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corrupti est r
          ecusandae asperiores accusamus ipsum delectus rem voluptatem, laborum quaerat
           nam repudiandae elige#
          ndi excepturi vitae error doloremque magnam soluta odit?

        </p>
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