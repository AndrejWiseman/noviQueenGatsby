import React from 'react';
import { Fade } from 'react-reveal';

const ScrollRevealTitle = ({ children }) => {
  return (
      <Fade>
        <h1>{children}</h1>
      </Fade>
  );
};

export default ScrollRevealTitle;
