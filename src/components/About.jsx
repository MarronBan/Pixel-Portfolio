import { useRef } from 'react'
import useIntersectionObserver from '../utils/useIntersectionObserver'

function About({ id }) {
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="min-h-screen p-8 md:p-16 flex flex-col justify-center"
    >
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl mb-8 bg-pixel-yellow inline-block p-2 pt-3.5 pixel-border">About Me</h2>
        
        <div className="bg-white p-4 pixel-border text-3xl">
          <p className="mb-4">
            Hello! I'm a passionate front-end developer with a love for creating pixel-perfect, 
            interactive web experiences that bring joy to users.
          </p>
          <p className='mb-4'>
            你好呀！我是一名充满激情的前端开发人员，热爱创造像素完美的产品，为用户带来欢乐的交互式网络体验。
          </p>
          <p className="mb-4">
            My journey in web development began five years ago when I built my first website using 
            HTML and CSS. Since then, I've expanded my skills to include modern JavaScript frameworks 
            like React, Vue, and Svelte, always staying on top of the latest web technologies and best practices.
          </p>
          <p className='mb-4'>
            我的web开发之旅始于五年前，当时我使用HTML和CSS。从那时起，我扩展了我的技能，包括现代JavaScript框架
            像React、Vue和Svelte一样，始终掌握最新的web技术和最佳实践。
          </p>
          
          <p className="mb-4">
            I believe that great web experiences combine beautiful design, clean code, and thoughtful 
            interactions. When I'm not coding, you can find me exploring pixel art, playing indie games, 
            or contributing to open source projects.
          </p>
          <p className='mb-4'>
            不翻译了……你可以替换成自己想说的话=。=
          </p>
          
          <p>
            I'm currently seeking opportunities to collaborate on creative projects where I can leverage 
            my technical expertise and artistic sensibilities to build memorable digital experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
