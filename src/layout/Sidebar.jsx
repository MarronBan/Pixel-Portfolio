import PixelButton from '../components/PixelButton'

const sections = ['Info','About', 'Projects', 'Skills','Experience']

function Sidebar({ activeSection, setActiveSection, setSilderClick }) {
  const scrollToSection = (section) => {
    if(section===activeSection) return
    setSilderClick(true)
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-64 bg-pixel-blue p-4 flex flex-col items-center pixel-border overflow-y-auto hide-scrollbar">
      <div className="pixel-border bg-white p-3 mb-8 mt-8">
        <h1 className="text-5xl">Pixel Portfolio</h1>
      </div>
      
      <div className="flex flex-col space-y-4 w-full text-3xl">
        {sections.map(section => (
          <PixelButton 
            key={section}
            active={activeSection === section}
            isSlideBtn={true}
            onClick={() => scrollToSection(section)}
          >
            {section}
          </PixelButton>
        ))}
      </div>

      <div className="mt-auto mb-8 pixel-border bg-white p-3">
        <p className="text-xs text-center">© 2025 Pixel Dev</p>
      </div>
    </div>
  )
}

export default Sidebar
