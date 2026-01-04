import React, { Children, cloneElement, useEffect, useState } from "react";
import { formations } from "./formations";

// Enhanced mobile ordering function
function getOrderedCards(originalCards, orderConfig) {
  if (!orderConfig) return originalCards;

  const cards = [...originalCards]; // Create mutable copy

  // Handle array of indices
  if (Array.isArray(orderConfig)) {
    return orderConfig.map((index) => cards[index]).filter(Boolean);
  }

  // Handle object with card identifiers
  if (typeof orderConfig === "object" && orderConfig !== null) {
    const orderedCards = [];
    const usedIndices = new Set();

    // Sort cards based on order config
    Object.entries(orderConfig)
      .sort(([, a], [, b]) => a - b) // Sort by order value
      .forEach(([cardId, order]) => {
        // Find card by key prop
        const cardIndex = cards.findIndex(
          (card) =>
            card.key === cardId ||
            card.props.id === cardId ||
            card.props["data-id"] === cardId,
        );

        if (cardIndex !== -1 && !usedIndices.has(cardIndex)) {
          orderedCards.push(cards[cardIndex]);
          usedIndices.add(cardIndex);
        }
      });

    // Add remaining cards in original order
    cards.forEach((card, index) => {
      if (!usedIndices.has(index)) {
        orderedCards.push(card);
      }
    });

    return orderedCards;
  }

  return originalCards;
}

export default function HandFormation({
  formation = "fan",
  children,
  className = "",
  formationProps = {},
  containerClassName = "card-table",
  mobileBreakpoint = 768,
  mobileOrder = null,
  ...containerProps
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mobileBreakpoint) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);

  let cards = Children.toArray(children);

  // Apply mobile ordering if specified
  if (isMobile && mobileOrder) {
    cards = getOrderedCards(cards, mobileOrder);
  }

  const currentFormation = isMobile && mobileBreakpoint ? "column" : formation;
  const formationStrategy = formations[currentFormation];

  if (!formationStrategy) {
    console.error(`Formation "${currentFormation}" not found`);
    return null;
  }

  // Pass mobile state and window size to formation strategy
  const mobileFormationProps = {
    ...formationProps,
    isMobile,
    windowSize,
    orderedIndices:
      isMobile && mobileOrder ? getOriginalIndices(cards, mobileOrder) : null,
  };

  return (
    <div
      className={`${containerClassName} ${isMounted ? "deal" : ""} ${isMobile ? "mobile-layout" : ""} ${className}`}
      {...containerProps}
    >
      {Children.map(cards, (child, i) => {
        const positioning = formationStrategy(
          i,
          cards.length,
          mobileFormationProps,
        );

        const newStyle = {
          "--i": i,
          ...positioning,
          opacity: isMounted ? 1 : 0,
        };

        return cloneElement(child, {
          ...child.props,
          style: {
            ...child.props.style,
            ...newStyle,
          },
        });
      })}
    </div>
  );
}

// Helper function to get original indices after ordering
function getOriginalIndices(originalCards, orderConfig) {
  if (Array.isArray(orderConfig)) {
    return orderConfig
      .map((index) => index)
      .filter((index) => index >= 0 && index < originalCards.length);
  }

  if (typeof orderConfig === "object" && orderConfig !== null) {
    const indices = [];
    const seenCards = new Set();

    Object.entries(orderConfig)
      .sort(([, a], [, b]) => a - b)
      .forEach(([cardId, order]) => {
        const cardIndex = originalCards.findIndex(
          (card) =>
            card.key === cardId ||
            card.props.id === cardId ||
            card.props["data-id"] === cardId,
        );

        if (cardIndex !== -1 && !seenCards.has(cardIndex)) {
          indices.push(cardIndex);
          seenCards.add(cardIndex);
        }
      });

    // Add remaining indices in order
    originalCards.forEach((card, index) => {
      if (!seenCards.has(index)) {
        indices.push(index);
      }
    });

    return indices;
  }

  return null;
}
