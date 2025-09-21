import React, { Children, cloneElement, useEffect, useState } from 'react';
import './App.css'
import Hand from './Hand.jsx'
import { PlayingCard } from './PlayingCard.jsx';
import { CoolTitle } from './CoolTitle.jsx';
import { useNavigate } from 'react-router-dom';
import {ClubIcon, HeartIcon, DiamondIcon, RustIcon, ReactIcon, TauriIcon} from './assets/icons.jsx'
import FoldedHand from './Folded-Hand.jsx';

function App() {
  const card1 = Math.floor(Math.random() * 9 + 2).toString();
  const card2 = Math.floor(Math.random() * 9 + 2).toString();
  const card3 = Math.floor(Math.random() * 9 + 2).toString();
  const card4 = Math.floor(Math.random() * 9 + 2).toString();
  const card5 = Math.floor(Math.random() * 9 + 2).toString();

  const navigate = useNavigate()


  return (
    <div className='App'>
      <div className="card-stack-row">
        <FoldedHand>
          <PlayingCard Suit={RustIcon} color="red" number={"Pomme-Doro"}></PlayingCard>
          <PlayingCard Suit={ReactIcon} color="#00a5c3ff" number={"MACRO blog"}></PlayingCard>
          <PlayingCard Suit={TauriIcon} color="#FFC131" number={"Pokemon Arena"}></PlayingCard>
          <PlayingCard Suit={RustIcon} color="red" number={"Cli Sky"}></PlayingCard>
          <PlayingCard Suit={ReactIcon} color="#00a5c3ff" number={"Yams"}></PlayingCard>
          <PlayingCard Suit={DiamondIcon}  color="black" number={"What I do:"}>React frontends and Rust backends are my specialty<br></br>Click on a project card to learn more</PlayingCard>
        </FoldedHand>                
      </div>
      
    </div>
  );
}


export default App
