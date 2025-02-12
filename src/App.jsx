import { useState } from 'react'

import './App.css'
import Header from './Component/Header';
import Banner from './Component/Banner';
import Skill from './Component/Skill';
import Projects from './Component/Project';
import About from './Component/About';
import ContactForm from './Component/ContactForm';

function App() {
 

  return (
    <div className='all'>
      <Header/>
      <Banner/>
      <About/>
      <Skill/>
      <Projects/>
      <ContactForm />
      

    </div>
  )
}

export default App
