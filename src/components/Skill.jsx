/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */
import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/intellij.svg',
        label: 'IntelliJ IDEA',
        desc: 'IDE'
    },
    {
        imgSrc: '/images/git.svg',
        label: 'Git',
        desc: 'Version control'
    },
    {
        imgSrc: '/images/github.svg',
        label: 'GitHub',
        desc: 'Code hosting'
    },
    {
        imgSrc: '/images/postman.svg',
        label: 'Postman',
        desc: 'API testing'
    },   
    {
        imgSrc: '/images/java.svg',
        label: 'Java',
        desc: 'Programming language'
    },
    {
        imgSrc: '/images/kotlin.svg',
        label: 'Kotlin',
        desc: 'Programming language'
    },
    {
        imgSrc: '/images/spring.svg',
        label: 'Spring Boot',
        desc: 'Java framework'
    },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS3',
        desc: 'Styling'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Scripting language'
    },
    {
        imgSrc: '/images/bootstrap.svg',
        label: 'Bootstrap 5',
        desc: 'CSS framework'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Frontend library'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'Utility-first CSS'
    },
    {
        imgSrc: '/images/mysql.svg',
        label: 'MySQL',
        desc: 'Database'
    },
    {
        imgSrc: '/images/postgresql.svg',
        label: 'PostgreSQL',
        desc: 'Database'
    },
    {
        imgSrc: '/images/mongodb.svg',
        label: 'MongoDB',
        desc: 'NoSQL database'
    },
    {
        imgSrc: '/images/redux.svg',
        label: 'Redux',
        desc: 'State management'
    },
    {
        imgSrc: '/images/axios.svg',
        label: 'Axios',
        desc: 'HTTP client'
    },
    {
        imgSrc: '/images/docker.svg',
        label: 'Docker',
        desc: 'Containerization'
    },
    {
        imgSrc: '/images/apachekafka.svg',
        label: 'Kafka',
        desc: 'Event streaming'
    },
    {
        imgSrc: '/images/kubernetes.svg',
        label: 'Kubernetes',
        desc: 'Container orchestration'
    },
    {
        imgSrc: '/images/rabbitmq.svg',
        label: 'RabbitMQ',
        desc: 'Message broker'
    },
    {
        imgSrc: '/images/socketio.svg',
        label: 'Socket.IO',
        desc: 'Realtime communication'
    },
    {
        imgSrc: '/images/wordpress.svg',
        label: 'WordPress',
        desc: 'CMS platform'
    },
];

const Skill = () => {
    return (
        <section className='section'>
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create 
                    exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc
                        }, key) => ( 
                            <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc = {desc}
                            classes='reveal-up'
                            />
                        ) )
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill