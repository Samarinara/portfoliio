// src/InfoCard.jsx
import React, { useState, useEffect } from 'react';

export function InfoCard({ title, color, Suit, body, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      // Wait for the animation to finish before calling onClose
      const timer = setTimeout(() => onClose(), 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  const handleBackdropClick = (e) => {
    // Close when clicking the backdrop, but not the modal content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleContentClick = (e) => {
    // Prevent closing when clicking inside the modal content
    // Allow link clicks to work normally
    if (e.target.tagName.toLowerCase() !== 'a') {
      e.stopPropagation();
    }
  };

  return (
    <div 
      className={`modal ${isClosing ? 'dismiss' : ''}`} 
      onClick={handleBackdropClick}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
    >
      <div 
        className={`modal-content ${isClosing ? 'dismiss' : ''}`} 
        onClick={handleContentClick}
      >
        <button 
          className="modal-close" 
          onClick={handleClose} 
          aria-label="Close modal"
          type="button"
        >
          ×
        </button>
        
        <div className="modal-header">
          {Suit && <Suit className="suit" />}
          <h2 id="modal-title" style={{ color }}>{title}</h2>
        </div>
        
        {body && (
          <div className="modal-body">
            {body}
          </div>
        )}
      </div>
    </div>
  );
}
