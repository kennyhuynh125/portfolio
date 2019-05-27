import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Contact from '../Contact';
import Experience from '../Experience';
import Home from '../Home';
import Projects from '../Projects';

const Main = () => (
  <Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/portfolio/experience' component={Experience} />
      <Route exact path='/portfolio/projects' component={Projects} />
      <Route exact path='/portfolio/contact' component={Contact} />
  </Fragment>
);

export default Main;
