import React from 'react';
import './AzmerTrade.css';
import project1 from "../assets/azmeraTrade.jpg";

export default function AzmerTrade() {
  return (
    <div className='all'>
      {/* Image on the left */}
      <div className='image'>
        <img src={project1} alt="Azmer Trade Project" />
      </div>

      {/* Text on the right */}
      <div className='text'>
        <h2>Azmer Trade Project</h2>
        <p>
          This is a brief description of the Azmer Trade project. It focuses on
          delivering high-quality trade solutions for businesses.
        </p>
      </div>
    </div>
  );
}
