import React from 'react';

function  PixelTimelineItem ({ children, title, time }){
  return (
    <div className="pixel-timeline-item text-3xl">
      <div className="pixel-timeline-dot"></div>
      <div className="pixel-timeline-content">
        {title && <div className="pixel-timeline-title">{title}</div>}
        {time && <div className="pixel-timeline-time">{time}</div>}
        <div className="pixel-timeline-description">{children}</div>
      </div>
    </div>
  );
};

const PixelTimeline = ({ children }) => {
  return (
    <div className="pixel-timeline">
      {children}
    </div>
  );
};

PixelTimeline.Item = PixelTimelineItem;

export default PixelTimeline;
