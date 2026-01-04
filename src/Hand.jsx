import React from 'react';
import HandFormation from './hands/HandFormation';

export default function Hand({ children, ...props }) {
  return (
    <HandFormation formation="fan" id="fan" {...props}>
      {children}
    </HandFormation>
  );
}