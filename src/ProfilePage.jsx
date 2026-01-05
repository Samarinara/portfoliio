import React, { Children, useState } from "react";
import LinedHand from "./LinedHand";
import {
  PlayingCard,
  SpadeIcon,
  HeartIcon,
  ClubIcon,
  DiamondIcon,
} from "./PlayingCard";
import { InfoCard } from "./InfoCard.jsx";

const ProfilePage = () => {
  const [info, setInfo] = useState(null);

  const openCard = (cardProps) => {
    setInfo({
      title: cardProps.title,
      color: cardProps.color,
      Suit: cardProps.Suit,
      body: cardProps.body,
    });
  };

  const closeInfo = () => setInfo(null);

  const projectLinks = (links) => (
    <div className="project-links">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
          {index < links.length - 1 && " | "}
        </React.Fragment>
      ))}
    </div>
  );

  const navigate = (path) => {
    window.location.href = path;
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
          <p>
            I'm Sam.<br></br>I love to solve problems in backend, frontend,
            wordle, or anywhere else.
          </p>
        </PlayingCard>
        <PlayingCard
          Suit={ClubIcon}
          color="black"
          number={"Backend"}
          tooltip="Click for more details about my backend development experience"
          tooltipPosition="top"
          infoBody={
            <>
              <p>
                A command-line interface (CLI) for posting and reading from
                Bluesky and my own platform, Macroblog.
              </p>
            </>
          }
          onClick={() =>
            openCard({
              title: "Backend",
              color: "black",
              Suit: ClubIcon,
              body: (
                <>
                  <p>
                    My primary language is <b>Rust</b> but I also have
                    experience with <b>JavaScript</b> and <b>Python</b> writing
                    robust REST APIs and web applications.<br></br>
                    <br></br>
                    I’m also skilled in <b>SQL</b>, optimising both new and
                    legacy databases on local, serverless, or on cloud platforms
                    like AWS or GCP.
                    <br></br>
                    <br></br>
                    <b>Custom AI models</b> enable me to build tools and
                    services that adapt to changing environments. Not only can I
                    train AI myself, but I can also deploy it to production in
                    products like chat interfaces and search engines.
                  </p>
                  {projectLinks([
                    {
                      href: "https://samkatevatis.usernametaken.net/projects",
                      text: "Check out my projects",
                    },
                  ])}
                </>
              ),
            })
          }
        >
          <p>
            My specialty is <b>Rust, JavaScript, and SQL.</b> I build tight
            integration systemwide, while ensuring scalability
          </p>
        </PlayingCard>
        <PlayingCard
          Suit={DiamondIcon}
          color="red"
          number={"Frontend"}
          tooltip="Click for more details about my Frontend development experience"
          tooltipPosition="top"
          infoBody={
            <>
              <p>
                A command-line interface (CLI) for posting and reading from
                Bluesky and my own platform, Macroblog.
              </p>
            </>
          }
          onClick={() =>
            openCard({
              title: "Backend",
              color: "red",
              Suit: DiamondIcon,
              body: (
                <>
                  <p>
                    I started learning UI and UX design when learning to make
                    games in high school. This led to my fascination with user
                    interfaces and experiences, pushing me from basic asset
                    creation, to design in <b>Figma</b> and <b>Affinity</b>, and
                    eventually the web.<br></br>
                    <br></br>Now I make websites and application UIs in{" "}
                    <b>JavaScript</b>, employing frameworks like
                    <b> React. Next.js and Tauri.</b>
                  </p>
                  {projectLinks([
                    {
                      href: "https://samkatevatis.usernametaken.net/projects",
                      text: "Check out my projects",
                    },
                  ])}
                </>
              ),
            })
          }
        >
          <p>
            I design in Figma and Affinity, and build with{" "}
            <b>React, Vanilla JavaScript, and Next.js</b>
          </p>
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
};

export default ProfilePage;
