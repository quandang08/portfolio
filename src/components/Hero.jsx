import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36 bg-gradient-to-b from-white via-sky-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-800 leading-tight mb-6">
          Building Scalable Modern Web for the Future
        </h1>

        {/* Subtext */}
        <p className="text-zinc-500 text-lg mb-10 max-w-xl mx-auto">
          I specialize in backend development with Java & Go, delivering
          high-performance, scalable, and secure web systems.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          {/* Download CV Button */}
          <a href="/dang_quan.pdf" download="dang_quan.pdf">
            <ButtonPrimary label="Download CV" icon="download" />
          </a>
          <ButtonOutline
            href="#about"
            label="Scroll down"
            icon="arrow_downward"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
