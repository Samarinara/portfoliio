import React, { Children, cloneElement, useEffect, useState } from 'react';
import './App.css'
import Hand from './Hand.jsx'
import { PlayingCard, ClubIcon, HeartIcon, DiamondIcon, SpadeIcon } from './PlayingCard.jsx';
import { CoolTitle } from './CoolTitle.jsx';

function App() {
  const card1 = Math.floor(Math.random() * 9 + 2).toString();
  const card2 = Math.floor(Math.random() * 9 + 2).toString();
  const card3 = Math.floor(Math.random() * 9 + 2).toString();
  const card4 = Math.floor(Math.random() * 9 + 2).toString();
  const card5 = Math.floor(Math.random() * 9 + 2).toString();

  return (
    <div className='App'>
      <Hand>
        <PlayingCard Suit={SpadeIcon} number={card1}>hello</PlayingCard>
        <PlayingCard Suit={HeartIcon} color="red" number={card2}>hello</PlayingCard>
        <PlayingCard Suit={DiamondIcon} color="red" number={card3}>
          <div className='card-text'>
            <h4>Hi I'm Sam</h4>
            I love making things that work
          </div>
        </PlayingCard>
        <PlayingCard Suit={ClubIcon} color="black" number={card4}>hello</PlayingCard>
        <PlayingCard Suit={HeartIcon}  color="red" number={card5}>hello</PlayingCard>

      </Hand>

    </div>
  );
}

export default App
