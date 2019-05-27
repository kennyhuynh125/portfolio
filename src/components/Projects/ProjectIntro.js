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

const projectIntro = `When it comes to coding, I truly believe that the best way to learn and harness a new skill is to apply it to practical use.
The best way to do that? Projects! Below are some of the projects that I have done on my personal time and when I was still in college.
More projects will be on the way!`;

const ProjectIntro = () => (
  <Card className={css(styles.fadeInLeft)}>
    <Text>{projectIntro}</Text>
  </Card>
);

export default ProjectIntro;
