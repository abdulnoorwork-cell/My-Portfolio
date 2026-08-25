import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default Home