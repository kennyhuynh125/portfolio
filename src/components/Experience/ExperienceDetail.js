import React from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Card, Flex, Text } from '../reusable';

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
    border: '1px solid',
    borderRadius: '25px',
    padding: '10px',
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
});

const ExperienceDetail = ({ experience }) => (
  <Card className={css(styles.cardStyle, styles.fadeInLeft)}>
    <Flex justifyContent='space-between'>
      <Text>{experience.companyName}</Text>
      <Text>{experience.duration}</Text>
      <Text><a href={experience.website} target='_blank' rel='noopener noreferrer'>Website</a></Text>
    </Flex>
    <Flex>
      <Text>{experience.description}</Text>
    </Flex>
    <Flex justifyContent='flex-start'>
      <Text>Skills/Technologies Used: {experience.skills}</Text>
    </Flex>
  </Card>
);

export default ExperienceDetail;
