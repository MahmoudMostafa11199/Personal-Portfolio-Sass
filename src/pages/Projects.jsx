import { Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';

import HeaderPage from '../components/HeaderPage';
import Button from '../components/Button';
import Project from '../features/Projects/Project';

import { portfolioDataAll } from '../features/Projects/projectsData';

function Projects() {
  const [searchParams] = useSearchParams();

  const projectIndex = searchParams.get('projectIndex') || '0';

  const project = portfolioDataAll[projectIndex];

  console.log(project);

  return (
    <Fragment>
      <HeaderPage title="My Portfolio" />
      <section className="project-page u-padding-vertical-hugo">
        <div className="container">
          <Project projectItem={project} />

          <div className="project-item__pagination">
            <Button styleType="btn btn__secondary">
              <ArrowLeft size={32} />
            </Button>
            <Button styleType="btn btn__secondary">
              <ArrowRight size={32} />
            </Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Projects;
