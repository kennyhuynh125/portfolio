import React from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Card, Text } from '../reusable';

const styles = StyleSheet.create({
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
});

const contactIntro = `Let's connect! I am always looking forward to connecting with others and would love to join your network.
Below you will find my LinkedIn profile, Github profile and resume. I am looking forward to hearing from you!`;
const ContactIntro = () => (
  <Card className={css(styles.fadeInLeft)}>
    <Text size='big'>{contactIntro}</Text>
  </Card>
);

export default ContactIntro;
