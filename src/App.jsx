import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Skill from './Component/Skill';
import Projects from './Component/Project';
import About from './Component/About';
import ContactForm from './Component/ContactForm';

function App() {
  return (
    <div className='all'>
      <Header />
      <div id="banner"><Banner /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skill /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactForm /></div>
    </div>
  );
}

export default App;