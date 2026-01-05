import React, { Children, cloneElement, useState } from "react";
import "./App.css";
import { PlayingCard } from "./PlayingCard.jsx";

import {
  DiamondIcon,
  RustIcon,
  ReactIcon,
  TauriIcon,
  NextjsIcon,
  PythonIcon,
} from "./assets/icons.jsx";
import FoldedHand from "./Folded-Hand.jsx";
import { InfoCard } from "./InfoCard.jsx";

function App() {
  const [info, setInfo] = useState(null);

  const navigate = (path) => {
    window.location.href = path;
  };

  const openCard = (props) => {
    setInfo({
      title: props.number,
      color: props.color,
      Suit: props.Suit,
      body: props.infoBody ?? props.children ?? null,
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

  const cards = [
    <PlayingCard
      key="p0"
      Suit={RustIcon}
      color="red"
      number={"Rusted Red"}
      infoBody={
        <>
          <p>
            This is a rewrite of Pokemon Fire Red, a classic game that has been
            enjoyed by generations of gamers. This game is my testing ground for
            new Rust features and concepts.<br></br>
            <br></br>
            It uses a custom game engine that employs sophisticated codegen to
            speed up development and improve performance.
            <br></br>
            <br></br>
            All of the data is stored in a secure and portable MySQL database.
            The Rust code dynamically writes SQL queries to interact with the
            database and prevent SQL injection attacks.
          </p>
          {projectLinks([
            {
              href: "https://github.com/Samarinara/pomme-doro",
              text: "View on GitHub",
            },
          ])}
        </>
      }
    />,
    <PlayingCard
      key="p1"
      Suit={NextjsIcon}
      color="#BADB78"
      number={"Lucki"}
      infoBody={
        <>
          <p>
            Lucki is a search engine designed to take you straight to the page
            you need. It is built using Nextjs and TypeScript, with a python
            REST API managing AI integration.<br></br>
            <br></br>
            Lucki uses multiple custom trained text classification models and a
            performance tuned LLM to route users directly to a site or info
            card. Wikipedia fact retrieval and RAG are used to provide
            additional context and information to my locally run Qwen model
            which regulates hallucinations.<br></br>
            <br></br>
            Nextjs, Tailwind, and TypeScript made Lucki both powerful and
            performant. I used shadcn components to quickly iterate new features
            and style everything in a consistent manner. The interface is very
            dynamic, fitting all screen sizes and information types.
          </p>
          {projectLinks([
            {
              href: "https://lucki.vercel.app",
              text: "Start Searching",
            },
          ])}
        </>
      }
    />,
    <PlayingCard
      key="p2"
      Suit={ReactIcon}
      color="#00A3C2"
      number={"TTCLI"}
      infoBody={
        <>
          <p>
            A server-based chat program for table top gaming. It allows players
            to communicate and coordinate their actions during a game and for
            the game master to manage the game state.<br></br>
            <br></br>
            It is built using React, TypeScript, and Tailwind CSS. The frontend
            is a single-page application that allows users to create and join
            games, send messages, and manage their game state. The backend is a
            done entierally using Firebase.
          </p>
          {projectLinks([
            {
              href: "https://ttcli-tau.vercel.app/",
              text: "Visit the site",
            },
            {
              href: "https://github.com/Samarinara/TTCLI",
              text: "Repository on GitHub",
            },
          ])}
        </>
      }
    />,
    <PlayingCard
      key="p3"
      Suit={RustIcon}
      color="red"
      number={"Cli Sky"}
      infoBody={
        <>
          <p>
            Cli Sky is a Rust-based application that allows users to post and
            read from Bluesky, a decentralized social network. It provides a
            simple and intuitive interface for accessing and interacting with
            the AT Protocol. <br></br>
            <br></br>
            Cli Sky is designed to be easy to use and understand, with a focus
            on simplicity and ease of use. It is built with the AT Protocol in
            mind, intended to be extensible and customizable to meet the needs
            of different users and use cases. Cli Sky can be expanded to support
            any type of Lexicon
          </p>
          {projectLinks([
            {
              href: "https://github.com/Samarinara/cli-sky",
              text: "View on GitHub",
            },
          ])}
        </>
      }
    />,
    <PlayingCard
      key="p4"
      Suit={PythonIcon}
      color="#BBDC79"
      number={"BRP"}
      infoBody={
        <>
          <p>
            Blackrock Python (BRP) is a Python library designed to help users
            make stock investments. It provides a simple and intuitive CLI
            interface for accessing and analyzing financial data, making it easy
            to make informed investments.<br></br>
            <br></br>
            BRP relies on the Yahoo Finance API to retrieve historic stock data,
            and uses Pandas, NumPy, and Matplotlib to visualize and analyze the
            data. The project supports every major international stock exchange
            and offers tools to compare them.
            <br></br>
            <br></br>
            Sample data is provided in the form of CSV files, which can be
            easily imported into BRP for analysis. Additionally, BRP includes a
            feature to automatically download and update stock data, making it
            easy to stay up-to-date with the latest market trends.
          </p>
          {projectLinks([
            {
              href: "https://github.com/Samarinara/YAMS",
              text: "View on GitHub",
            },
            { href: "https://yams-nu.vercel.app/", text: "Play the game!" },
          ])}
        </>
      }
    />,
    <PlayingCard
      key="p4"
      Suit={ReactIcon}
      color="#00a5c3ff"
      number={"Yams"}
      infoBody={
        <>
          <p>
            Yams (Yet Another Matrix Simulator) is a gamified version of my
            linear methods homework that helped me ace the course.
            <br></br>
            <br></br>
            It is built using Vanilla javascript because of its simplicity. The
            frontend is designed to be intuitive and easy to use, with a focus
            on user experience.
            <br></br>
            <br></br>
            The game is designed to be challenging but informative, with a focus
            on learning linear algebra concepts through gameplay and practicing
            operations.
          </p>
          {projectLinks([
            {
              href: "https://github.com/Samarinara/YAMS",
              text: "View on GitHub",
            },
            { href: "https://yams-nu.vercel.app/", text: "Play the game!" },
          ])}
        </>
      }
    />,
    <PlayingCard
      key="p5"
      Suit={DiamondIcon}
      color="black"
      number={"What I do:"}
      infoBody={
        <>
          <p>
            I am a style-focused frontend designer as well as an
            efficiency-minded backend engineer.
          </p>
          <p>
            I make projects for two main reasons: <b>Fun</b> and{" "}
            <b>Practicality</b>. Click on a project card to learn more about my
            work!
          </p>
        </>
      }
    >
      React frontends and Rust backends are my specialty.
      <br />
      Click on a project card to learn more about my work!
    </PlayingCard>,
  ];

  return (
    <div className="App">
      <div className="card-stack-row">
        <FoldedHand
          mobileBreakpoint={768}
          mobileOrder={["p5", "p0", "p2", "p4", "p1", "p3"]}
        >
          {cards.map((c) =>
            cloneElement(c, {
              onClick: () => openCard(c.props),
            }),
          )}
        </FoldedHand>
      </div>

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
