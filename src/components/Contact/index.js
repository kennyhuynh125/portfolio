import React from 'react';
import ContactIntro from './ContactIntro';
import ContactLinks from './ContactLinks';
import { Container, Spacer } from '../reusable';

const Contact = () => (
  <Container>
    <ContactIntro />
    <Spacer />
    <ContactLinks />
  </Container>
);

export default Contact;
