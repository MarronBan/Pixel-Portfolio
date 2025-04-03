import React, { useState } from 'react';

function PixelPopover({ 
  children, 
  content, 
  title,
  trigger = 'click',
  position = 'bottom'
}){
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (trigger === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className="pixel-popover-container"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isOpen && (
        <div className={`pixel-popover pixel-popover-${position}`}>
          {title && <div className="pixel-popover-title">{title}</div>}
          <div className="pixel-popover-content">{content}</div>
        </div>
      )}
    </div>
  );
};

export default PixelPopover;
