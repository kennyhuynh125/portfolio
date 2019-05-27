import React from 'react';
import { Container } from '../reusable';
import About from './About';
import Intro from './Intro';

const Home = () => (
  <Container>
    <Intro />
    <About />
  </Container>
);

export default Home;
