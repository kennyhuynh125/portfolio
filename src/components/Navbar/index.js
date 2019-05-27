import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Container, Text } from '../reusable';
import { LINKS } from './utils';

const styles = StyleSheet.create({
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    top: 0,
    overflow: 'hidden',
    textAlign: 'center',
  },
  li: {
    float: 'none',
    display: 'inline-block',
  },
  a: {
    display: 'block',
    color: 'black',
    fontFamily: 'Tajawal',
    fontSize: '18px',
    padding: '14px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: '#b9d9f7',
    },
  },
});

const Navbar = () => (
  <Container>
    <ul className={css(styles.ul)}>
      {
        LINKS.map(item => (
          <li className={css(styles.li)}>
            <a className={css(styles.a)} href={item.href}>
            <Text size='big'>{item.title}</Text></a>
          </li>
        ))
      }
    </ul>
  </Container>
);

export default Navbar;
