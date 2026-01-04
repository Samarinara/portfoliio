import React from 'react';
import HandFormation from './hands/HandFormation';

export default function LinedHand({ children, ...props }) {
  return (
    <HandFormation formation="line" {...props}>
      {children}
    </HandFormation>
  );
}
