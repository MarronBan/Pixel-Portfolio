import React, { useState, useRef, useLayoutEffect  } from 'react'
import PixelButton from './PixelButton'

function PixelCard({ title, image, shortDesc, longDesc, demoUrl, githubUrl, delay, isVisible, showLong }) {
  const [isHovered, setIsHovered] = useState(false)
  const domRef = useRef(null)
  const [initHeight,setInitHeight] = useState(null)
  const [measured, setMeasured] = useState(false);

  useLayoutEffect(()=>{
    if(domRef.current){
      setTimeout(()=>{
          setInitHeight(domRef.current.clientHeight)
      },200)
    }
  },[])
  
  return (
    <div 
      ref={domRef}
      className="bg-white pixel-border transform transition-all duration-300 cursor-pointer"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? (isHovered ? 'scale(1.05)' : 'scale(1)') 
          : 'translateY(20px)',
        height:isHovered?'auto':initHeight?initHeight+'px':'auto'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 bg-pixel-blue text-white">
        <h3 className="text-center text-2xl">{title}</h3>
      </div>
      
      <div className="p-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover mb-4 pixel-border"
        />
        <div className="flex space-x-2 px-3 mt-4 gap-[30px]">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <PixelButton isMinSize={true}>Demo</PixelButton>
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <PixelButton isMinSize={true}>Code</PixelButton>
          </a>
        </div>
        
        <div className={`min-h-[80px] mt-4`}>
          {isHovered? (
            <p className="text-xl">{longDesc}</p>
          ) : (
            <p className="text-xl">{shortDesc}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PixelCard
