import React from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import {
  Card, Flex, Spacer, Text,
} from '../reusable';
import Profile from '../../images/profile.png';

const styles = StyleSheet.create({
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
  responsive: {
    borderRadius: '50%',
    width: '300px',
    height: '300px',
  },
});

const Intro = () => (
  <Flex
  className={css(styles.fadeInLeft)}
  flexDirection='column'
  justifyContent='center'
  >
    <Card>
      <img src={Profile} alt='profile' className={css(styles.responsive)} />
    </Card>
    <Spacer />
    <Flex
      flexDirection='column'
    >
      <Card>
        <Text size='big'>Kenny Huynh</Text>
      </Card>
      <Card>
        <Text size='big'>Full-Stack Software Engineer</Text>
      </Card>
      <Card>
        <Text color='darkblue' size='big'>Status: Actively applying for software engineering opportunities in San Francisco</Text>
      </Card>
    </Flex>
  </Flex>
);

export default Intro;
