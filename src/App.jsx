import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import SocialBar from './components/SocialBar.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Home/>

      <About/>
      <Portfolio/>
      <Skills/>
      <Experience/>
      <Contact/>
      <SocialBar />


    </>
  )
}

export default App
