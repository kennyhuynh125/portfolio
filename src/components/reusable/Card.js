import React from 'react';

const Card = ({ children, className, style = {} }) => (
  <div style={{ ...style }} className={className}>
    {children}
  </div>
);

export default Card;
