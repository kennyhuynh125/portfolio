import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Contact from '../Contact';
import Experience from '../Experience';
import Home from '../Home';
import Projects from '../Projects';

const Main = () => (
  <Fragment>
      <Switch>
        <Route exact path='/portfolio' component={Home} />
        <Route path='/portfolio/experience' component={Experience} />
        <Route path='/portfolio/projects' component={Projects} />
        <Route path='/portfolio/contact' component={Contact} />
      </Switch>
  </Fragment>
);

export default Main;
