import React, { Children, cloneElement, useEffect, useState } from 'react';

export default function FoldedHand({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // Trigger the animation shortly after mounting
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cards = Children.toArray(children);
  const numCards = cards.length;
  const middleIndex = (numCards - 1) / 2;

  return (
    <div className={`card-table allign-top ${isMounted ? 'deal' : ''}`}>
      {Children.map(cards, (child, i) => {
        // Overlapping stack with rotation
        const offsetX = (i - middleIndex) * 40; // Center horizontally on the middle card
        const offsetY = (i - middleIndex) * 40; // Center vertically on the middle card
        const angle = (i - middleIndex) * 4; // Apply a slight rotation to each card
        
        const tx = `${offsetX}px`;
        const ty = `${offsetY}px`;
        const r = `${angle}deg`;
        
        const newStyle = { 
          '--i': i, 
          '--tx': tx, 
          '--ty': ty, 
          '--r': 0,
          zIndex: i,
          transformOrigin: 'center',
          position: 'absolute'
        };
        
        return cloneElement(child, {
          ...child.props,
          style: {
            ...child.props.style,
            ...newStyle,
            opacity: isMounted ? 1 : 0,
          },
        });
      })}
    </div>
  );
}
