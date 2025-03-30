/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */
// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Node Modules 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";
import { ReactLenis } from "lenis/react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => { 
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
            once: true,
          }
        }
      );
    });
  }, []);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
