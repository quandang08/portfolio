/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */
import Header from "./components/Header";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";

const App = () => {
  return (
    <>
      <Header />
      <main >
        <Hero />
        <About />
        <Skill />
        <Work/>
        <Review/>
      </main>
    </>
  );
};
export default App;