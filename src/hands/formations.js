/*
 * Mobile Order System:
 * 
 * The column formation now supports manual vertical ordering on mobile through the mobileOrder prop.
 * 
 * Usage Examples:
 * 
 * 1. Array of indices (simple reorder):
 *    mobileOrder={[2, 0, 1, 3]}
 *    - 3rd card appears first, 1st second, 2nd third, 4th last
 * 
 * 2. Array of keys (component-based reorder):
 *    mobileOrder={['contact', 'projects', 'about']}
 *    - Cards with these keys appear in specified order
 * 
 * 3. Object mapping (advanced reorder):
 *    mobileOrder={{ 'contact': 0, 'projects': 1, 'about': 2 }}
 *    - Object values determine order, keys match card.key props
 * 
 * The ordering only affects mobile layout (width < 768px).
 * Desktop layout remains unchanged using the original formation.
 */

export const formations = {
  fan: (cardIndex, totalCards, { windowSize = { width: 1920 } }) => {
    const middleIndex = Math.floor(totalCards / 2);
    const spreadRatio = Math.max(0.8, Math.min(1.2, windowSize.width / 1920));
    return {
      "--tx": `${(cardIndex - middleIndex) * 12 * spreadRatio}%`,
      "--ty": `${Math.abs(cardIndex - middleIndex) * 6 * spreadRatio - 3}%`,
      "--r": `${(cardIndex - middleIndex) * 8 * spreadRatio}deg`,
    };
  },

  folded: (cardIndex, totalCards, { isMobile = false, windowSize = { width: 1920 } }) => {
    if (isMobile) {
      // Simple vertical stack for mobile using CSS gap
      return {
        "--tx": "0px",
        "--ty": "0px",
        "--r": "0deg",
        "--rx": "0deg",
        "--ry": "0deg", 
        "--s": "1",
        "--t": "0deg",
        position: "relative",
        transform: "translateY(0) rotateX(0) rotateY(0) scale(1) translateZ(0)",
        zIndex: "auto",
      };
    }
    
    // Original desktop logic
    const spacing = Math.max(35, Math.min(30, windowSize.width * 0.015));
    const middleIndex = (totalCards - 1) / 2;
    const offsetX = (cardIndex - middleIndex) * spacing;
    const offsetY = (cardIndex - middleIndex) * spacing;

    return {
      "--tx": `${offsetX}px`,
      "--ty": `${offsetY}px`,
      "--r": "0deg",
      zIndex: cardIndex,
      position: "absolute",
      transformOrigin: "center",
    };
  },

  grid: (cardIndex, totalCards, { columns, windowSize = { width: 1920 } }) => {
    const row = Math.floor(cardIndex / columns);
    const col = cardIndex % columns;
    const cellWidth = Math.max(
      20,
      Math.min(24, (windowSize.width * 0.06) / columns),
    );
    const cellHeight = Math.max(30, Math.min(36, windowSize.height * 0.08));
    return {
      "--tx": `${col * cellWidth + col * 3}vw`,
      "--ty": `${row * cellHeight + row * 3}vw`,
      "--r": "0deg",
    };
  },

  line: (cardIndex, totalCards, { windowSize = { width: 1920 } }) => {
    const spacing = Math.max(20, Math.min(40, windowSize.width * 0.025));
    const middleIndex = (totalCards - 1) / 2;
    const offsetX = (cardIndex - middleIndex) * spacing;

    return {
      "--tx": `${offsetX}px`,
      "--ty": "0px",
      "--r": "0deg",
    };
  },

  column: (cardIndex, totalCards, { isMobile = false, orderedIndices = null } = {}) => {
    if (isMobile) {
      // For mobile, use simple relative positioning without transforms
      let effectiveIndex = cardIndex;
      
      // If ordering is applied, use the visual position for vertical spacing
      if (orderedIndices && Array.isArray(orderedIndices)) {
        effectiveIndex = orderedIndices.indexOf(cardIndex);
      }

      return {
        "--tx": "0px",
        "--ty": "0px",
        "--r": "0deg",
        position: "relative",
        marginTop: effectiveIndex > 0 ? "6vw" : "0",
        transform: "none",
      };
    } else {
      // Use clamp for desktop to ensure consistent sizing
      const cardHeight = 80; // 36vh card height + 4vh gap
      const middleIndex = (totalCards - 1) / 2;
      const offsetY = (cardIndex - middleIndex) * cardHeight;

      return {
        "--tx": "0px",
        "--ty": `${offsetY}vh`,
        "--r": "0deg",
      };
    }
  },
};
