import React from 'react';
import './TimelineCircle.scss';

interface TimelineCircleProps {
  activeIndex: number;
  labels: string[];
}

const TimelineCircle: React.FC<TimelineCircleProps> = ({ activeIndex, labels }) => {
  const pointsCount = labels.length;
  const radius = 180; 

  return (
    <div className="timeline-circle-container">
      {}
      <div className="circle-background" />

      {}
      {labels.map((label, index) => (
        <div
          key={index}
          className={`dot ${index === activeIndex ? 'active' : ''}`} 
          style={{
            transform: `rotate(${(360 / pointsCount) * index}deg) translate(${radius}px) rotate(-${(360 / pointsCount) * index}deg)`,
          }}
        >
          {index === activeIndex ? (
            <div className="dot-content">
              <div className="number">{index + 1}</div>
              <div className="label">{label}</div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TimelineCircle;
