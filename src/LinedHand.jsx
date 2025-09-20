import React, { Children, cloneElement, useEffect, useState } from 'react';

export default function FoldedHand({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // Trigger the animation shortly after mounting
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cards = Children.toArray(children);

  return (
    <div className={`card-table ${isMounted ? 'deal' : ''}`}>
      {Children.map(cards, (child, i) => {
        // Small offsets to show just the top-left corner of each card
        const tx = `${i * 8}px`;  // Horizontal offset for corner visibility
        const ty = `${i * 6}px`;  // Vertical offset for corner visibility  
        const r = '0deg';         // No rotation for clean stacked effect
        const newStyle = { 
          '--i': i, 
          '--tx': tx, 
          '--ty': ty, 
          '--r': r,
          zIndex: cards.length - i  // First card on bottom, last on top
        };
        return cloneElement(child, {
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
