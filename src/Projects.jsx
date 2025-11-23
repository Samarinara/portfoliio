import React, { Children, cloneElement, useEffect, useState } from 'react';
import './App.css'
import { PlayingCard } from './PlayingCard.jsx';
import { href, useNavigate } from 'react-router-dom';
import { DiamondIcon, RustIcon, ReactIcon, TauriIcon } from './assets/icons.jsx'
import FoldedHand from './Folded-Hand.jsx';
import { InfoCard } from './InfoCard.jsx';
import { text } from 'motion/react-client';

function App() {
  const navigate = useNavigate();

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
          <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
          {index < links.length - 1 && ' | '}
        </React.Fragment>
      ))}
    </div>
  );

  const cards = [
    <PlayingCard key="p0" Suit={RustIcon} color="red" number={"Pomme-Doro"} infoBody={
      <>
        <p>A pomegranate-themed Pomodoro timer that I use to study. It's designed to help you stay focused and manage your time effectively.</p>
        {projectLinks([{ href: 'https://github.com/Samarinara/pomme-doro', text: 'View on GitHub' }])}
      </>
    } />,
    <PlayingCard key="p1" Suit={ReactIcon} color="#00a5c3ff" number={"MACRO blog"} infoBody={
      <>
        <p>A pre-alpha decentralized blogging platform based on Bluesky and the AT Protocol.</p>
        {projectLinks([{ href: 'https://github.com/Samarinara/macroblog', text: 'View on GitHub' }, { href: 'https://macroblog.usernametaken.net', text: 'Use the platform!' }])}
      </>
    } />,
    <PlayingCard key="p2" Suit={TauriIcon} color="#FFC131" number={"Pokemon Arena"} infoBody={
      <>
        <p>A server-based Pokémon game where you can build a party and play against friends.</p>
        {projectLinks([
          { href: 'https://github.com/Samarinara/pokemon-arena', text: 'Client on GitHub' },
          { href: 'https://github.com/Samarinara/pokemon-arena-server', text: 'Server on GitHub' }
        ])}
      </>
    } />,
    <PlayingCard key="p3" Suit={RustIcon} color="red" number={"Cli Sky"} infoBody={
      <>
        <p>A command-line interface (CLI) for posting and reading from Bluesky and my own platform, Macroblog.</p>
        {projectLinks([{ href: 'https://github.com/Samarinara/cli-sky', text: 'View on GitHub' }])}
      </>
    } />,
    <PlayingCard key="p4" Suit={ReactIcon} color="#00a5c3ff" number={"Yams"} infoBody={
      <>
        <p>Yams (Yet Another Matrix Simulator) is a gamified version of my linear methods homework that helped me ace the course.</p>
        {projectLinks([{ href: 'https://github.com/Samarinara/YAMS', text: 'View on GitHub' }, { href: 'https://yams-nu.vercel.app/', text: 'Play the game!' }])}
      </>
    } />,
    <PlayingCard key="p5" Suit={DiamondIcon} color="black" number={"What I do:"} infoBody={
      <>
        <p>I am a style-focused frontend designer as well as an efficiency-minded backend engineer.</p>
        <p>I make projects for two main reasons: <b>Fun</b> and <b>Practicality</b>. Click on a project card to learn more about my work!</p>
      </>
    } >
      React frontends and Rust backends are my specialty.<br />
      Click on a project card to learn more about my work!
    </PlayingCard>,
  ];

  return (
    <div className='App'>
      <div className="card-stack-row">
        <FoldedHand>
          {cards.map((c, idx) =>
            cloneElement(c, {
              key: idx,
              onClick: () => openCard(c.props),
            })
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
