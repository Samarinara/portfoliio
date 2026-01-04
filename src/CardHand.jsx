import React from 'react';
import HandFormation from './hands/HandFormation';

export default function CardHand({ children, className = '', ...props }) {
  return (
    <HandFormation 
      formation="folded" 
      containerClassName="card-hand"
      className={className}
      {...props}
    >
      {children}
    </HandFormation>
  );
}
