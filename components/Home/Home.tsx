"use client";

import Hero from "./Hero/Hero";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Research from "./Research/Research";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Research />
      <Contact />
    </main>
  );
};

export default Home;
