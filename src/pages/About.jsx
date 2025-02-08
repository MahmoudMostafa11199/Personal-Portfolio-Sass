import { Fragment } from 'react';

import AboutSection from '../features/About/AboutSection';
import Education from '../features/Experience/Education';
import HeaderPage from '../components/HeaderPage';

function About() {
  return (
    <Fragment>
      <HeaderPage title="About" />
      <AboutSection />
      <Education />
    </Fragment>
  );
}

export default About;
