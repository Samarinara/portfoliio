import { SpadeIcon, HeartIcon, ClubIcon, DiamondIcon } from '../PlayingCard';

export const getSuitIcon = (suit) => {
  switch (suit) {
    case 'spades': return SpadeIcon;
    case 'hearts': return HeartIcon;
    case 'clubs': return ClubIcon;
    case 'diamonds': return DiamondIcon;
    default: return null;
  }
};

export const getSuitColor = (suit) => {
  return (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black';
};