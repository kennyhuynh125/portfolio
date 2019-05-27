import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Contact from '../Contact';
import Experience from '../Experience';
import Home from '../Home';
import Projects from '../Projects';

const Main = () => (
  <Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/experience' component={Experience} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
  </Fragment>
);

export default Main;
