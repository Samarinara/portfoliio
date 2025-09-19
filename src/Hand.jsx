import React, { Children, cloneElement, useEffect, useState } from 'react';

export default function Hand({ children }) {
  const [isDealt, setIsDealt] = useState(false);
  useEffect(() => {
    // Trigger the animation shortly after mounting
    const timer = setTimeout(() => setIsDealt(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cards = Children.toArray(children);
  const numCards = cards.length;
  const middleIndex = Math.floor(numCards / 2);

  return (
    <div className={`card-table ${isDealt ? 'deal' : ''}`}>
      {Children.map(cards, (child, i) => {
        const tx = `${(i - middleIndex) * 20}%`;
        const ty = `${(Math.abs(i - middleIndex) * 10) - 5}%`;
        const r = `${(i - middleIndex) * 10}deg`;
        const newStyle = { '--i': i, '--tx': tx, '--ty': ty, '--r': r };
        return cloneElement(child, {
          style: {
            // The issue is that cloneElement overwrites styles.
            // We need to merge them instead.
            ...child.props.style,
            ...newStyle,
          },
        });
      })}
    </div>
  );
}