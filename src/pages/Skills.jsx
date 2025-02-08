import { Fragment } from 'react';

import HeaderPage from '../components/HeaderPage';
import SkillSection from '../features/Skills/SkillSection';
import Services from '../features/Skills/Services';

function Skills() {
  return (
    <Fragment>
      <HeaderPage title="Skills" />
      <SkillSection />
      <Services />
    </Fragment>
  );
}

export default Skills;
