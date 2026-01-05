import React, { Children, cloneElement, useState } from "react";
import "./App.css";
import { PlayingCard } from "./PlayingCard.jsx";

import {
  DiamondIcon,
  RustIcon,
  ReactIcon,
  HeartIcon,
  ClubIcon,
  SpadeIcon,
} from "./assets/icons.jsx";
import FoldedHand from "./Folded-Hand.jsx";
import { InfoCard } from "./InfoCard.jsx";
import { CoolTitle } from "./CoolTitle.jsx";

function App() {
  const [info, setInfo] = useState(null);

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

  // Backend Languages Cards (Left Hand)
  const languageCards = [
    <PlayingCard
      key="l0"
      Suit={RustIcon}
      color="red"
      number={"Rust"}
      infoBody={
        <>
          <p>
            High-performance systems programming with memory safety guarantees.
            Perfect for building fast, reliable backend services.
          </p>
          {projectLinks([
            {
              href: "#",
              text: "View Rust Project",
            },
          ])}
        </>
      }
    >
      Building scalable microservices and CLI tools
    </PlayingCard>,
    <PlayingCard
      key="l1"
      Suit={ClubIcon}
      color="black"
      number={"Go"}
      infoBody={
        <>
          <p>
            Concurrent backend development with built-in goroutines and channels.
            Excellent for APIs and distributed systems.
          </p>
          {projectLinks([
            {
              href: "#",
              text: "View Go Project",
            },
          ])}
        </>
      }
    >
      Creating efficient web services and tools
    </PlayingCard>,
    <PlayingCard
      key="l2"
      Suit={SpadeIcon}
      color="black"
      number={"Python"}
      infoBody={
        <>
          <p>
            Rapid development with Django and FastAPI. Great for data processing,
            automation, and web applications.
          </p>
          {projectLinks([
            {
              href: "#",
              text: "View Python Project",
            },
          ])}
        </>
      }
    >
      Developing APIs and data-driven applications
    </PlayingCard>,
    <PlayingCard
      key="l3"
      Suit={DiamondIcon}
      color="red"
      number={"SQL"}
      infoBody={
        <>
          <p>
            Database design and optimization with PostgreSQL, MySQL, and SQLite.
            Building efficient data layers.
          </p>
          {projectLinks([
            {
              href: "#",
              text: "View Database Project",
            },
          ])}
        </>
      }
    >
      Designing schemas and optimizing queries
    </PlayingCard>,
  ];

  // Backend Experience Cards (Right Hand)
  const experienceCards = [
    <PlayingCard
      key="e0"
      Suit={HeartIcon}
      color="red"
      number={"API Design"}
      infoBody={
        <>
          <p>
            RESTful and GraphQL API development with proper documentation,
            versioning, and testing strategies.
          </p>
          {projectLinks([
            {
              href: "#",
              text: "View API Project",
            },
          ])}
        </>
      }
    >
      Building scalable and maintainable APIs
    </PlayingCard>,
    <PlayingCard
      key="e1"
      Suit={ClubIcon}
      color="black"
      number={"Database Architecture"}
      infoBody={
        <>
          <p>
            Designing normalized and denormalized database schemas for optimal
            performance and scalability.
          </p>
          {projectLinks([
            {
              href: "#",
              text: "View Database Design",
            },
          ])}
        </>
      }
    >
      Creating efficient data models and relationships
    </PlayingCard>,
    <PlayingCard
      key="e2"
      Suit={SpadeIcon}
      color="black"
      number={"System Design"}
      infoBody={
        <>
          <p>
            Architecting distributed systems, microservices, and monolithic
            applications with scalability in mind.
          </p>
          {projectLinks([
            {
              href: "#",
              text: "View System Design",
            },
          ])}
        </>
      }
    >
      Planning robust and scalable system architectures
    </PlayingCard>,
    <PlayingCard
      key="e3"
      Suit={DiamondIcon}
      color="red"
      number={"Performance Optimization"}
      infoBody={
        <>
          <p>
            Profiling and optimizing backend services for better response times,
            throughput, and resource utilization.
          </p>
          {projectLinks([
            {
              href: "#",
              text: "View Optimization Case Study",
            },
          ])}
        </>
      }
    >
      Improving application speed and efficiency
    </PlayingCard>,
  ];

  return (
    <div className="App">
      <div className="backend-dev-title">
        <CoolTitle 
          text="Backend Development" 
          duration={800} 
          delay={200}
          as="h1"
        />
      </div>
      <div className="backend-dev-container">
        {/* Left Hand - Backend Languages */}
        <div className="card-table left-hand-container">
          <FoldedHand
            mobileBreakpoint={768}
            mobileOrder={["l0", "l1", "l2", "l3"]}
            className="left-hand"
            containerClassName=""
          >
            {languageCards.map((c, idx) =>
              cloneElement(c, {
                key: idx,
                onClick: () => openCard(c.props),
              }),
            )}
          </FoldedHand>
        </div>

        {/* Right Hand - Backend Experience */}
        <div className="card-table right-hand-container">
          <FoldedHand
            mobileBreakpoint={768}
            mobileOrder={["e0", "e1", "e2", "e3"]}
            className="right-hand"
            containerClassName=""
          >
            {experienceCards.map((c, idx) =>
              cloneElement(c, {
                key: idx,
                onClick: () => openCard(c.props),
              }),
            )}
          </FoldedHand>
        </div>
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
