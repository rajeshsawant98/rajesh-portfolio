import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

const Home = () => {
  return (
    <div className='overflow-hidden' >
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* Add more sections as needed */}
    </div>
  )
}

export default Home