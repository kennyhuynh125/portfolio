import React from 'react';

const Text = ({
  children,
  color = 'black',
  fontWeight = 'normal',
  size = null,
} = {}) => {
  let fontSize = '20px';
  if (size === 'small') {
    fontSize = '14px';
  }
  if (size === 'big') {
    fontSize = '24px';
  }
  const style = {
    color,
    fontSize,
    fontWeight,
    fontFamily: 'Tajawal',
  };
  return (
    <p style={style}>
      {children}
    </p>
  );
};

export default Text;
