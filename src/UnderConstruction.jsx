import React, { Children, cloneElement, useEffect, useState } from 'react';
import './App.css'
import Hand from './Hand.jsx'
import { PlayingCard, ClubIcon, HeartIcon, DiamondIcon, SpadeIcon } from './PlayingCard.jsx';
import { CoolTitle } from './CoolTitle.jsx';
import { useNavigate } from 'react-router-dom';

function UnderConstruction() {
  const card1 = Math.floor(Math.random() * 9 + 2).toString();
  const navigate = useNavigate()

  return (
    <div className='App'>
      <Hand>
        <PlayingCard Suit={SpadeIcon} number={card1} onClick={() => navigate('/home')}>Still under construction <br /> Click here to go home</PlayingCard>
      </Hand>
    </div>
  );
}

export default UnderConstruction
