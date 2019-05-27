import React, { Fragment } from 'react';
import { Spacer } from './components/reusable';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Background from './images/background.jpg';

const style = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1,
  width: '100%',
  opacity: 0.3,
};

const App = () => (
  <Fragment>
    <img alt='background' src={Background} style={style} />
    <Navbar />
    <Spacer />
    <Main />
  </Fragment>
);

export default App;
