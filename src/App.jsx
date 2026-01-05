import React, { useState } from "react";
import "./App.css";
import Hand from "./Hand.jsx";
import { PlayingCard } from "./PlayingCard.jsx";
import { CoolTitle } from "./CoolTitle.jsx";
import { useNavigate } from "react-router-dom";
import { InfoCard } from "./InfoCard.jsx";
import {
  ClubIcon,
  HeartIcon,
  DiamondIcon,
  SpadeIcon,
  SocialsIcon,
  DownloadIcon,
} from "./assets/icons.jsx";

function App() {
  const [info, setInfo] = useState(null);

  const card1 = Math.floor(Math.random() * 9 + 2).toString();
  const card2 = Math.floor(Math.random() * 9 + 2).toString();
  const card3 = Math.floor(Math.random() * 9 + 2).toString();
  const card4 = Math.floor(Math.random() * 9 + 2).toString();
  const card5 = Math.floor(Math.random() * 9 + 2).toString();

  const navigate = useNavigate();

  const closeInfo = () => setInfo(null);

  const openSocialsCard = () => {
    setInfo({
      title: "Socials",
      color: "#333",
      Suit: SocialsIcon,
      body: (
        <div style={{ textAlign: "center", lineHeight: "2" }}>
          <div>
            <a
              href="https://bsky.app/profile/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                marginBottom: "8px",
                padding: "8px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f0f0f0";
                e.target.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateX(0)";
              }}
            >
              🦋 Bluesky (@Samarinara)
            </a>
            <a
              href="tel:+1234567890"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                marginBottom: "8px",
                padding: "8px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f0f0f0";
                e.target.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateX(0)";
              }}
            >
              📱 Phone: 604-618-9971
            </a>
            <a
              href="mailto:your@email.com"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                marginBottom: "8px",
                padding: "8px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f0f0f0";
                e.target.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateX(0)";
              }}
            >
              ✉️ Email: sam@katevatis.com
            </a>
            <a
              href="https://github.com/samarinara"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "block",
                padding: "8px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f0f0f0";
                e.target.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateX(0)";
              }}
            >
              💻 GitHub (Samarinara)
            </a>
          </div>
        </div>
      ),
    });
  };

  // Define mobile order - cards will appear vertically in this order on mobile only
  const mobileOrder = [2, 3, 1, 0]; // 4th card first, then 2nd, then 1st, then 3rd

  return (
    <div>
      <Hand mobileBreakpoint={768} mobileOrder={mobileOrder}>
        <PlayingCard
          Suit={SocialsIcon}
          number={card1}
          onClick={openSocialsCard}
        >
          Click here for my Socials
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

      {info && (
        <InfoCard
          title={info.title}
          color={info.color}
          Suit={info.Suit}
          body={info.body}
          onClose={closeInfo}
        />
      )}
    </div>
  );
}

export default App;
