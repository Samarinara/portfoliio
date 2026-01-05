import React from "react";
import "./App.css";
import Hand from "./Hand.jsx";
import { PlayingCard } from "./PlayingCard.jsx";
import { CoolTitle } from "./CoolTitle.jsx";
import { useNavigate } from "react-router-dom";
import {
  ClubIcon,
  HeartIcon,
  DiamondIcon,
  SpadeIcon,
  GithubIcon,
  DownloadIcon,
} from "./assets/icons.jsx";

function App() {
  const card1 = Math.floor(Math.random() * 9 + 2).toString();
  const card2 = Math.floor(Math.random() * 9 + 2).toString();
  const card3 = Math.floor(Math.random() * 9 + 2).toString();
  const card4 = Math.floor(Math.random() * 9 + 2).toString();
  const card5 = Math.floor(Math.random() * 9 + 2).toString();

  const navigate = useNavigate();

  // Define mobile order - cards will appear vertically in this order on mobile only
  const mobileOrder = [2, 3, 1, 0]; // 4th card first, then 2nd, then 1st, then 3rd

  return (
    <div>
      <Hand mobileBreakpoint={768} mobileOrder={mobileOrder}>
        <PlayingCard
          Suit={GithubIcon}
          number={card1}
          onClick={() => window.open("https://github.com/samarinara")}
        >
          Click here for my Github
        </PlayingCard>
        <PlayingCard
          Suit={HeartIcon}
          color="red"
          number={card2}
          onClick={() => navigate("/projects")}
        >
          Click here to see what I do
        </PlayingCard>
        <PlayingCard
          Suit={DiamondIcon}
          color="red"
          number={card3}
          onClick={() => navigate("/home")}
        >
          Hi I'm Sam<br></br>I am a backend dev and Ui designer living in
          Calgary
        </PlayingCard>
        <PlayingCard
          Suit={ClubIcon}
          color="black"
          number={card4}
          onClick={() => navigate("/profile")}
        >
          Click here learn more about me
        </PlayingCard>
        <PlayingCard
          Suit={DownloadIcon}
          color="red"
          number={card5}
          onClick={() => navigate("/under-construction")}
        >
          Click here to download my CV
        </PlayingCard>
      </Hand>
    </div>
  );
}

export default App;
