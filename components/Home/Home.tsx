"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles


const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        easing: "ease", // Easing function for animations
        duration: 1000, // Duration of animations
        once: true, // Whether animation should happen only once
        anchorPlacement: "top-bottom", // Defines which position of the element regarding to window should trigger the animation
      });
    };
    initAOS();
    // Cleanup function to remove AOS styles when component unmounts
    return () => {
      AOS.refresh();
    };    
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
