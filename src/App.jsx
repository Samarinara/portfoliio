import React, { Children, cloneElement, useEffect, useState } from 'react';
import './App.css'
import Hand from './Hand.jsx'
import { PlayingCard, ClubIcon, HeartIcon, DiamondIcon, SpadeIcon } from './PlayingCard.jsx';
import { CoolTitle } from './CoolTitle.jsx';
import { useNavigate } from 'react-router-dom';

function App() {
  const card1 = Math.floor(Math.random() * 9 + 2).toString();
  const card2 = Math.floor(Math.random() * 9 + 2).toString();
  const card3 = Math.floor(Math.random() * 9 + 2).toString();
  const card4 = Math.floor(Math.random() * 9 + 2).toString();
  const card5 = Math.floor(Math.random() * 9 + 2).toString();

  const navigate = useNavigate()


  return (
    <div className='App'>
      <Hand>
        <PlayingCard Suit={SpadeIcon} number={card1} onClick={() => navigate('/under-construction')}>Click here for my Github</PlayingCard>
        <PlayingCard Suit={HeartIcon} color="red" number={card2}>hello</PlayingCard>
        <PlayingCard Suit={DiamondIcon} color="red" number={card3} onClick={() => navigate('/under-construction')}>
          <div className='card-text'>
            <p>Hi I'm Sam</p>
            I love making things that work
            Click here to learn more about me
          </div>
        </PlayingCard>
        <PlayingCard Suit={ClubIcon} color="black" number={card4}>hello</PlayingCard>
        <PlayingCard Suit={HeartIcon}  color="red" number={card5}>hello</PlayingCard>

      </Hand>
      <h2>hello</h2>
    </div>
  );
}

export default App
