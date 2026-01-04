import React, { useState, useRef, useEffect } from 'react';

const CardTooltip = ({ children, text, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const cardRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (isVisible && cardRef.current && tooltipRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let top = 0;
      let left = 0;
      
      const spacing = 8; // Space between card and tooltip
      
      switch (position) {
        case 'top':
          top = cardRect.top - tooltipRect.height - spacing;
          left = cardRect.left + (cardRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = cardRect.bottom + spacing;
          left = cardRect.left + (cardRect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = cardRect.top + (cardRect.height - tooltipRect.height) / 2;
          left = cardRect.left - tooltipRect.width - spacing;
          break;
        case 'right':
          top = cardRect.top + (cardRect.height - tooltipRect.height) / 2;
          left = cardRect.right + spacing;
          break;
        default:
          top = cardRect.top - tooltipRect.height - spacing;
          left = cardRect.left + (cardRect.width - tooltipRect.width) / 2;
      }
      
      // Ensure tooltip stays within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      if (left < 8) left = 8;
      if (left + tooltipRect.width > viewportWidth - 8) {
        left = viewportWidth - tooltipRect.width - 8;
      }
      
      if (top < 8) top = 8;
      if (top + tooltipRect.height > viewportHeight - 8) {
        top = viewportHeight - tooltipRect.height - 8;
      }
      
      setTooltipPosition({ top, left });
    }
  }, [isVisible, position]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className="card-tooltip"
          style={{
            position: 'fixed',
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            zIndex: 1000,
          }}
        >
          {text}
          <div className={`card-tooltip-arrow card-tooltip-arrow-${position}`} />
        </div>
      )}
    </>
  );
};

export default CardTooltip;