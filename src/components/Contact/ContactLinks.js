import React from 'react';
import { fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Card, Flex, Text } from '../reusable';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../../constants';

const styles = StyleSheet.create({
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
});
const ContactLinks = () => (
  <Card className={css(styles.fadeInLeft)}>
    <Flex justifyContent='space-around'>
      <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
        <Text size='big'>LinkedIn</Text>
      </a>
      <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
        <Text size='big'>Github</Text>
      </a>
      <a href={RESUME_URL} target='_blank' rel='noopener noreferrer'>
        <Text size='big'>Resume</Text>
      </a>
    </Flex>
  </Card>
);

export default ContactLinks;
