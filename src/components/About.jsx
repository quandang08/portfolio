/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */
import React from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 3,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi! I'm Amu, an aspiring web developer with a focus on Java Spring
            and microservices architecture. I'm passionate about building
            scalable and efficient web applications, using Java Spring to create
            robust backend systems and microservices to ensure flexibility and
            scalability. I strive to improve my skills every day, embracing new
            challenges to craft digital solutions that are both user-friendly
            and high-performing.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo-pixel.png"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
