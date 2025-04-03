import React, { useRef } from 'react'
import useIntersectionObserver from '../utils/useIntersectionObserver'

const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Svelte", "Next.js"]
  },
  {
    name: "Styling",
    skills: ["Tailwind CSS", "SASS/SCSS", "CSS Modules", "Styled Components", "Framer Motion"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Firebase"]
  },
  {
    name: "Tools",
    skills: ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma", "Adobe XD"]
  }
]

function Skills({ id }) {
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="min-h-screen p-8 md:p-16 bg-pixel-yellow"
    >
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl mb-8 bg-white inline-block p-2 pixel-border">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.name}
              className="bg-white p-4 pixel-border"
              style={{
                transitionDelay: `${catIndex * 200}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <h3 className="text-xl mb-4 bg-pixel-green p-1.5 px-4 inline-block pixel-corners">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-pixel-blue hover:bg-pixel-light-blue cursor-pointer text-white px-3 py-1 text-sm pixel-corners"
                    style={{
                      transitionDelay: `${(catIndex * 200) + (skillIndex * 100)}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                      transition: 'opacity 0.5s ease, transform 0.5s ease'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
