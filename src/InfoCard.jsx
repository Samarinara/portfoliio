// src/InfoCard.jsx
import React, { useState, useEffect, useRef } from 'react';

export function InfoCard({ title, color, Suit, body, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const cardRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    if (cardRef.current) {
      const currentTransform = getComputedStyle(cardRef.current).transform;
      cardRef.current.style.setProperty('--current-transform', currentTransform);
    }
  };

  useEffect(() => {
    if (isClosing) {
      // Wait for the animation to finish before calling onClose
      const timer = setTimeout(() => onClose(), 200);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <div className={`modal ${isClosing ? 'dismiss' : ''}`} onClick={handleClose} role="dialog" aria-modal="true">
      <div 
        ref={cardRef} 
        className={`info-card ${isClosing ? 'dismiss' : ''}`} 
        onClick={(e) => {
          // Only stop propagation if the click is not on a link
          if (e.target.tagName.toLowerCase() !== 'a') {
            e.stopPropagation();
          }
        }} 
        style={{ zIndex: 100, width: '50vw', height: '50vh' }}
      >
        <div className="modal-content" style={{ width: '100%', height: '100%' }}>
          <button className="modal-close" onClick={handleClose} aria-label="Close">×</button>          <div className="modal-header">
            {Suit ? <Suit style={{ width: 24, height: 24, marginRight: 8 }} /> : null}            <h2 style={{ color }}>{title}</h2>
          </div>          {body ? <div className="modal-body">{body}</div> : null}
        </div>
      </div>
    </div>
  );
}
