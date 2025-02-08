import { Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';

import HeaderPage from '../components/HeaderPage';
import Button from '../components/Button';
import Project from '../features/Projects/Project';

import { portfolioDataAll } from '../features/Projects/projectsData';

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  let projectIndex = searchParams.get('projectIndex') || '0';

  const project = portfolioDataAll[projectIndex];

  const handleIndexIncrement = () => {
    projectIndex = parseInt(projectIndex) + 1;
    if (projectIndex >= portfolioDataAll.length) projectIndex = 0;
    setSearchParams({ projectIndex });
  };

  const handleIndexDecrement = () => {
    projectIndex = parseInt(projectIndex) - 1;
    if (projectIndex < 0) projectIndex = portfolioDataAll.length - 1;
    setSearchParams({ projectIndex });
  };

  return (
    <Fragment>
      <HeaderPage title="My Portfolio" />
      <section className="project-page u-padding-vertical-hugo">
        <div className="container">
          <Project projectItem={project} />

          <div className="project-item__pagination">
            <Button
              styleType="btn btn__secondary"
              onclick={handleIndexDecrement}
            >
              <ArrowLeft size={32} />
            </Button>
            <Button
              styleType="btn btn__secondary"
              onclick={handleIndexIncrement}
            >
              <ArrowRight size={32} />
            </Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Projects;
