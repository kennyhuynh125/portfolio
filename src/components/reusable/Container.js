import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  marginLeft: '25%',
};

const Container = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

export default Container;
