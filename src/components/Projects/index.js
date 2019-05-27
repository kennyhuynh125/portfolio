import React, { Fragment } from 'react';
import { Container, Flex, Spacer } from '../reusable';
import ProjectDetail from './ProjectDetail';
import ProjectIntro from './ProjectIntro';
import { PROJECTS } from './utils';

const Projects = () => (
  <Container>
    <Flex flexDirection='column'>
      <ProjectIntro />
      <Spacer />
      {PROJECTS.map(project => (
        <Fragment>
          <ProjectDetail project={project} />
          <Spacer />
        </Fragment>
      ))}
    </Flex>
  </Container>
);

export default Projects;
