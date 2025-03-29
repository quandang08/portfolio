/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */
import Header from "./components/Header";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";

const App = () => {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <About />
        <Skill />
      
      </main>
    </>
  );
};
export default App;