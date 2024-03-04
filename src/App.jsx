import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import ReactGA from "react-ga4";

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-2V76M8J23J');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
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