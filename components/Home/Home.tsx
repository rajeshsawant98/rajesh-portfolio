"use client";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
