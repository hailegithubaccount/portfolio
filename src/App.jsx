import { useState } from 'react'

import './App.css'
import Header from './Component/Header';
import Banner from './Component/Banner';
import Skill from './Component/Skill';
import Projects from './Component/Project';

function App() {
 

  return (
    <div className='all'>
      <Header/>
      <Banner/>
      <Skill/>
      <Projects/>

    </div>
  )
}

export default App
