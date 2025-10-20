import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import { motion } from 'framer-motion'
import AboutMe from './Component/AboutMe'
import ShowCase from './Component/ShowCase'
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import Projects from './Component/Projects'
import Certificates from './Component/Certification'
import Skills from './Component/Skills'
import SkillSet from './Component/SkillSet'
import Contact from './Component/Contact'
import Education from './Component/Education'

function App() {
 

  return (
    <>
    <Router>
      <Navbar />
      <Hero/>
      <About/>
      <AboutMe/>
      <Education/>
      <ShowCase/>
      
    
      <Routes>  
        <Route path="/" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/skills" element={<SkillSet />} />
      </Routes>
       {/* <SkillSet/> */}
       <Contact />
    </Router>
   
    </>
  )
}

export default App
