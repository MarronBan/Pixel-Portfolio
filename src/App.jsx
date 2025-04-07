import { useState, useEffect, useRef } from 'react'
import Sidebar from './layout/Sidebar'
import Content from './layout/Content'
import PersonalInfo from './components/PersonalInfo'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'

const sections = ['Info','About', 'Projects', 'Skills','Experience']

function App() {
  const [activeSection, setActiveSection] = useState('Info')
  const [isLoading, setIsLoading] = useState(true)
  const timeoutRef = useRef(null);
  useEffect(() => {
    // just mock loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  const [isSliderClick,setSilderClick] = useState(false)
  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop
    const sectionHeight = window.innerHeight
    
    // Calculate which section is currently in view
    const currentSection = Math.floor(scrollPosition / sectionHeight)
    if (sections[currentSection]&&!isSliderClick&&sections[currentSection]!==activeSection) {
      setActiveSection(sections[currentSection])
    }

    //模拟滚动结束
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(()=>{
      setSilderClick(false)
    },150)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-pixel-green">
        <div className="text-6xl animate-pixel-bounce">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        setSilderClick={setSilderClick}
      />
      <Content onScroll={handleScroll}>
        <PersonalInfo id="Info"/>
        <About id="About" />
        <Projects id="Projects" />
        <Skills id="Skills" />
        <Experience id='Experience' />
      </Content>
    </div>
  )
}

export default App
