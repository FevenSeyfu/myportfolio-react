import React,{useEffect} from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import ReactGA from "react-ga4";
import Layout from './components/Layout/Layout'

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-2V76M8J23J');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <Layout>
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
    </Layout>
  )
}

export default App