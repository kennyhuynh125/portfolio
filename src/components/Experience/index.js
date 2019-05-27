import React, { Fragment } from 'react';
import { Container, Flex, Spacer } from '../reusable';
import ExperienceDetail from './ExperienceDetail';
import ExperienceIntro from './ExperienceIntro';
import { WORK_EXPERIENCE } from './utils';

const Experience = () => (
  <Container>
    <Flex flexDirection='column'>
      <ExperienceIntro />
      <Spacer />
      {WORK_EXPERIENCE.map(experience => (
        <Fragment>
          <ExperienceDetail experience={experience} />
          <Spacer />
        </Fragment>
      ))}
    </Flex>
  </Container>
);

export default Experience;
