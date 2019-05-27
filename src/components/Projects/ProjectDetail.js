import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
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

const ProjectDetail = ({ project }) => {
  const finishedText = project.finished ? '' : '(STILL IN DEVELOPMENT)';
  return (
    <Card className={css(styles.cardStyle, styles.fadeInLeft)}>
      <Flex>
        <Flex flexDirection='column'>
          <Text>{`${project.title}${finishedText}`}</Text>
          <Text>{project.type} Project</Text>
          <Flex>
            <a href={project.github} rel="noopener noreferrer" target='_blank'>
              <FontAwesomeIcon icon={faCode} />
            </a>
          </Flex>
        </Flex>
        <Flex flexDirection='column'>
          <Text>{project.description}</Text>
          <Text>Skills/Technologies Used: {project.skills}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProjectDetail;
