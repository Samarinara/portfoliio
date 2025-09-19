import React, { Children, cloneElement, useEffect, useState } from 'react';

export default function Hand({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // Trigger the animation shortly after mounting
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cards = Children.toArray(children);
  const numCards = cards.length;
  const middleIndex = Math.floor(numCards / 2);

  return (
    <div className={`card-table ${isMounted ? 'deal' : ''}`}>
      {Children.map(cards, (child, i) => {
        const tx = `${(i - middleIndex) * 20}%`;
        const ty = `${(Math.abs(i - middleIndex) * 10) - 5}%`;
        const r = `${(i - middleIndex) * 10}deg`;
        const newStyle = { '--i': i, '--tx': tx, '--ty': ty, '--r': r };
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