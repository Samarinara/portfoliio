import React from "react";
import LinedHand from "./LinedHand";
import {
  PlayingCard,
  SpadeIcon,
  HeartIcon,
  ClubIcon,
  DiamondIcon,
} from "./PlayingCard";

const ProfilePage = () => {
  const testCards = [
    { suit: "spades", rank: "A" },
    { suit: "hearts", rank: "K" },
    { suit: "clubs", rank: "Q" },
    { suit: "diamonds", rank: "J" },
  ];

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

  const navigate = (path) => {
    window.location.href = path;
  };

  const getSuitColor = (suit) => {
    return suit === "hearts" || suit === "diamonds" ? "red" : "black";
  };

  return (
    <div>
      <LinedHand
        mobileBreakpoint={768}
        mobileOrder={{
          clubs: 0, // Queen card appears first
          hearts: 1, // King card appears second
          spades: 2, // Ace card appears third
          diamonds: 3, // Jack card appears last
        }}
      >
        <PlayingCard
          Suit={HeartIcon}
          color="red"
          number={"Hello there"}
          tooltip="Go back to the homepage"
          tooltipPosition="top"
          onClick={() => navigate("/home")}
        >
          I'm Sam and I love working with others to build great things
        </PlayingCard>
        <PlayingCard
          Suit={ClubIcon}
          color="black"
          number={"Backend"}
          tooltip="Click for more details about my backend development experience"
          tooltipPosition="top"
          onClick={() => navigate("/backend")}
        >
          Multiple finished projects in many programming languages and
          databases.
        </PlayingCard>
        <PlayingCard
          Suit={DiamondIcon}
          color="red"
          number={"Ui Design"}
          tooltip="Click for more details about my Ui design development experience"
          tooltipPosition="top"
          onClick={() => navigate("/ui-design")}
        >
          Years of experience in UI design and prototyping with Figma and
          Affinity.
        </PlayingCard>
        <PlayingCard
          Suit={SpadeIcon}
          color="black"
          number={"Hire me?"}
          tooltip="Contact information and CV download"
          tooltipPosition="top"
          onClick={() => navigate("/under-construction")}
        >
          I believe I can add to your team.<br></br>
          <br></br>Click here to download my CV
        </PlayingCard>
      </LinedHand>
    </div>
  );
};

export default ProfilePage;
