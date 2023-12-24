import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
    </div>
  )
}

export default App