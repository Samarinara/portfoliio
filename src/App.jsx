import React, { Children, cloneElement, useEffect, useState } from 'react';
import './App.css'
import Hand from './Hand.jsx'
import { PlayingCard, ClubIcon, HeartIcon, DiamondIcon, SpadeIcon } from './PlayingCard.jsx';
import { CoolTitle } from './CoolTitle.jsx';


function App() {
  return (
    <div className='App'>
      <Hand>
        <PlayingCard Suit={SpadeIcon} number='Q'>hello</PlayingCard>
        <PlayingCard Suit={HeartIcon} color="red" number='J'>hello</PlayingCard>
        <PlayingCard Suit={ClubIcon} number='2'>Welcome to Sam Katevatis' portfolio! Click on cards for more info </PlayingCard>
        <PlayingCard Suit={DiamondIcon} color="red"number='7'>hello</PlayingCard>
        <PlayingCard Suit={HeartIcon}  color="red" number='K'>hello</PlayingCard>

      </Hand>

    </div>
  );
}

export default App
