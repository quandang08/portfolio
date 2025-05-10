/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */
const aboutItems = [
  {
    label: "Projects Completed",
    number: 3,
  },
  {
    label: "Years of Experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-zinc-200">
          <p className="text-zinc-700 mb-6 md:text-lg leading-relaxed">
            Hi! I'm <strong>Amu</strong>, an aspiring backend developer focusing on Java Spring and
            microservices architecture. I'm passionate about building scalable,
            efficient systems and continuously improving my skills to deliver
            robust, high-performing solutions.
          </p>

          <div className="flex flex-wrap gap-6">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-sky-600 mb-1">
                  {number}
                  <span className="text-sky-400">+</span>
                </div>
                <p className="text-sm text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
