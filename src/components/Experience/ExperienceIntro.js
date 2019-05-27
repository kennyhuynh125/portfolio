import React from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Card, Text } from '../reusable';
import { LINKEDIN_URL } from '../../constants';

const styles = StyleSheet.create({
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
});
const backgroundIntro = `I have industry experience mostly through internships. Prior to graduating, I have done three internships, the most recent one being at Genentech.
After graduating, I worked at a startup called Keyo AI. Since Keyo AI was based in Palo Alto, I lived with my aunt in Millbrae to make the commute shorter. I would come home every weekend to be with family, but would have to drive back to Millbrae. I didn't feel settled, and because of this, I made the ultimate decision to leave Keyo AI to pursue an opportunity in the city where I can stay and commute from home.
After living in Millbrae for a little over three months, I realized that I would be much more happier being settled at home with my family.`;

const ExperienceIntro = () => (
  <Card className={css(styles.fadeInLeft)}>
    <Text>{backgroundIntro}</Text>
    <Text>
      Below are brief summaries of what I did at each company. If you want to see more, checkout my
      <a href={LINKEDIN_URL} target='_blank' rel="noopener noreferrer"> LinkedIn</a> page!
    </Text>
  </Card>
);

export default ExperienceIntro;
