import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

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
    <span className='fixed bottom-1/2 right-3 bg-green-500 z-50 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl animate-pulse cursor-pointer'>
      <a href="https://wa.me/923197453657" target='_blank'><FaWhatsapp /></a>
    </span>
    </>
  )
}

export default Home