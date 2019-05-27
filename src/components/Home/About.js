import React from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Card, Flex, Text } from '../reusable';

const styles = StyleSheet.create({
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
});

const aboutMessage = `Hi there, I'm Kenny!
I am a Software Engineer from San Francisco. I have recently graduated from San Jose State Unviersity with a degree in Computer Science.
I enjoy developing across the stack and have had experience developing both frontend UI and backend services through work experience and projects.
I started coding back in high school when I took AP Computer Science and have been enjoying it ever since.
I strive to code every day, whether that is doing coding challenges, learning a new skill or developing a new project.
Some of my hobbies include sports, exercising and photography (background image was taken on top of Salesforce Tower). Outside of coding, I am either playing basketball, running around my neighborhood, or going on a little photo shoot.
I am currently looking for new graduate / full-time opportunities in San Francisco where I can continue to grow and develop to become a better software engineer!`;

const About = () => (
  <Flex flexDirection='column' className={css(styles.fadeInLeft)}>
    <Card>
      <Text size='big'>{aboutMessage}</Text>
    </Card>
  </Flex>
);

export default About;
