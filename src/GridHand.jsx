import React from "react";
import HandFormation from "./hands/HandFormation";
import {
  PlayingCard,
  SpadeIcon,
  HeartIcon,
  ClubIcon,
  DiamondIcon,
} from "./PlayingCard";

const GridHand = ({ cards, rows, columns, ...props }) => {
  const getSuitIcon = (suit) => {
    switch (suit) {
      case "spades":
        return SpadeIcon;
      case "hearts":
        return HeartIcon;
      case "clubs":
        return ClubIcon;
      case "diamonds":
        return DiamondIcon;
      default:
        return null;
    }
  };

  const getSuitColor = (suit) => {
    return suit === "hearts" || suit === "diamonds" ? "red" : "black";
  };

  const playingCards = cards.map((card, index) => (
    <PlayingCard
      key={index}
      number={card.rank}
      Suit={getSuitIcon(card.suit)}
      color={getSuitColor(card.suit)}
    />
  ));

  return (
    <HandFormation 
      formation="grid"
      formationProps={{ columns }}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 24vh)`,
        gridTemplateRows: `repeat(${rows}, 36vh)`,
        gap: "0vh",
        justifyContent: "center",
        padding: "2vh",
        width: "100%",
        height: "100%"
      }}
      {...props}
    >
      {playingCards}
    </HandFormation>
  );
};

export default GridHand;
