/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */

import ProjectCard from './ProjectCard'

const works = [
  { imgSrc: '/images/project-1.png', title: 'Full stack music app', tags: ['JAVA', 'SPRING BOOT','MULTI-LAYERED'], projectLink: 'https://github.com/quandang08/social-media-front-end.git' },
  { imgSrc: '/images/project-2.png', title: 'Free stock photo app', tags: ['JAVA', 'SPRING BOOT','MICROSERVICE'], projectLink: 'https://github.com/quandang08/task-management-FrontEnd.git' },
  { imgSrc: '/images/project-3.png', title: 'E-commerce System', tags: ['JAVA','SPRING BOOT', 'MICROSERVICE'], projectLink: 'https://github.com/quandang08/E-Commerence-Java-Spring.git' },

]

const Work = () => (
  <section id="work" className="py-20 bg-zinc-50">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent text-shadow-md">
          My Portfolio Highlights
        </span>
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {works.map(({ imgSrc, title, tags, projectLink }, i) => (
            <ProjectCard
              key={i}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="transform transition hover:-translate-y-1 hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Work
