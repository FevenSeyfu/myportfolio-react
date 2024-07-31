import React,{useEffect} from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Works from './Components/Portfolio/Works'
import Contact from './Components/Contact/Contact'
import ReactGA from "react-ga4";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-2V76M8J23J');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-primary-dark-blue">
      <Header />
      <main className="w-full overflow-x-hidden flex-grow px-8 pt-24 md:pr-0  md:pl-12 lg:pl-[5%]">
        <Hero />
        <About />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App