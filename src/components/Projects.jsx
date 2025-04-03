import React, { useRef } from 'react'
import PixelCard from './PixelCard'
import PixelButton from './PixelButton'
import useIntersectionObserver from '../utils/useIntersectionObserver'

import project1Pic from '@/assets/project1.svg'
import project2Pic from '@/assets/project2.svg'
import project3Pic from '@/assets/project3.svg'

const projects = [
  {
    id: 1,
    title: "Pixel Weather App",
    image: project1Pic,
    shortDesc: "A weather application with pixel art visuals",
    longDesc: "A responsive weather application built with React and styled with pixel art visuals. Features include real-time weather data, animated weather conditions, and location-based forecasts.",
    demoUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Farm Game UI",
    image: project2Pic,
    shortDesc: "UI components for a farming simulator game",
    longDesc: "A comprehensive UI component library designed for a browser-based farming simulator. Built with React, featuring inventory management, crafting systems, and character dialogues with pixel art style.",
    demoUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Retro Portfolio",
    image: project3Pic,
    shortDesc: "A nostalgic portfolio template",
    longDesc: "A customizable portfolio template inspired by 90s web design and pixel art. Built with React and CSS animations, featuring smooth page transitions and interactive elements.",
    demoUrl: "#",
    githubUrl: "https://github.com"
  }
]

function Projects({ id }) {
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="min-h-screen p-8 md:p-16 bg-pixel-light-blue relative"
    >
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className='flex mb-8 justify-between'>
          <h2 className="text-3xl bg-white inline-block p-2 pt-3.5 pixel-border">My Projects</h2>
          <div className="text-center text-3xl">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <PixelButton>More Projects</PixelButton>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-6 "
        
        >
          {projects.map((project, index) => (
            <PixelCard 
              key={project.id}
              title={project.title}
              image={project.image}
              shortDesc={project.shortDesc}
              longDesc={project.longDesc}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              delay={index * 200}
              isVisible={isVisible}
              showLong={index==0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
