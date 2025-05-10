/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */
import React from 'react';
import SkillCard from './SkillCard';

const skillItems = [
  { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design tool' },
  { imgSrc: '/images/intellij.svg', label: 'IntelliJ IDEA', desc: 'IDE' },
  { imgSrc: '/images/git.svg', label: 'Git', desc: 'Version control' },
  { imgSrc: '/images/github.svg', label: 'GitHub', desc: 'Code hosting' },
  { imgSrc: '/images/postman.svg', label: 'Postman', desc: 'API testing' },
  { imgSrc: '/images/java.svg', label: 'Java', desc: 'Programming language' },
  { imgSrc: '/images/spring.svg', label: 'Spring Boot', desc: 'Java framework' },
  { imgSrc: '/images/css3.svg', label: 'CSS3', desc: 'Styling' },
  { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Scripting language' },
  { imgSrc: '/images/bootstrap.svg', label: 'Bootstrap 5', desc: 'CSS framework' },
  { imgSrc: '/images/react.svg', label: 'React', desc: 'Frontend library' },
  { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'Utility-first CSS' },
  { imgSrc: '/images/mysql.svg', label: 'MySQL', desc: 'Database' },
  { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'NoSQL database' },
  { imgSrc: '/images/redux.svg', label: 'Redux', desc: 'State management' },
  { imgSrc: '/images/axios.svg', label: 'Axios', desc: 'HTTP client' },
  { imgSrc: '/images/docker.svg', label: 'Docker', desc: 'Containerization' },
  { imgSrc: '/images/apachekafka.svg', label: 'Kafka', desc: 'Event streaming' },
];

const Skill = () => {
  return (
    <section className="bg-zinc-100 py-16">
  <div className="container">
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-zinc-800 reveal-up">
        Essential Tools I Use
      </h2>
      <p className="text-zinc-500 mt-3 mb-8 max-w-[50ch] reveal-up">
        Discover the powerful tools and technologies I use to create
        exceptional, high-performing websites & applications.
      </p>

      <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        {skillItems.map(({ imgSrc, label, desc }, index) => (
          <SkillCard
            key={index}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
            classes="reveal-up"
          />
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Skill;
