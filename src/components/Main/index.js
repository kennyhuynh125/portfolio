import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Contact from '../Contact';
import Experience from '../Experience';
import Home from '../Home';
import Projects from '../Projects';

const Main = () => (
  <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
  </Fragment>
);

export default Main;
