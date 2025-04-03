import React, { useState } from 'react'

function PixelButton({ children, onClick, active = false, isSlideBtn=false, isMinSize=false }) {
  const [isPressed, setIsPressed] = useState(false)
  
  return (
    <button
      className={`
        w-full text-center transition-transform font-pixel
        ${active ? 'bg-pixel-yellow' : 'bg-white'}
        ${isPressed ? 'transform translate-y-1' : ''}
        pixel-border
        ${isSlideBtn && 'pt-3.5 pixel-border-large'}
        ${!isMinSize&&'p-2'}
      `}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {children}
    </button>
  )
}

export default PixelButton
