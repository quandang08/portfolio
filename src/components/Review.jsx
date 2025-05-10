/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */
// Node Modules 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

//Components
import React from 'react'
import ReviewCard from './ReviewCard';

const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sophia Ramirez',
      imgSrc: '/images/people-1.jpg',
      company: 'PixelForge'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Ethan Caldwell',
      imgSrc: '/images/people-2.jpg',
      company: 'NexaWave'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Liam Bennett',
      imgSrc: '/images/people-3.jpg',
      company: 'CodeCraft'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Noah Williams',
      imgSrc: '/images/people-4.jpg',
      company: 'BrightWeb'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: '/images/people-5.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: '/images/people-6.jpg',
      company: 'Skyline Digital'
    }
  ];

const Review = () => {

  useGSAP(() => {
  gsap.to('.scrub-slide', {
    scrollTrigger: {
      trigger: '.scrub-slide',
      start: '-200% 80%',
      end: '400% 80%',
      scrub: true,
    },
    x: '-1000'
  });
});


  return (
    <section
      id='reviews'
      className='section overflow-hidden'
      style={{
        background: 'radial-gradient(at 100% 0%, rgba(17, 94, 181, 0.1) 0%, transparent 50%)',
        backgroundColor: 'rgb(12, 12, 12)'
      }}
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up" style={{ color: '#e0f2fe' }}>
          What our customers say
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                borderRadius: '16px',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review