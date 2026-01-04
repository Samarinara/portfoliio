import React from 'react';
import HandFormation from './hands/HandFormation';

export default function FoldedHand({ children, ...props }) {
  return (
    <HandFormation 
      formation="folded" 
      className="align-top"
      {...props}
    >
      {children}
    </HandFormation>
  );
}
