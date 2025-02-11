import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';

import Button from '../components/Button';
import Spinner from '../components/Spinner';
import HeaderPage from '../components/HeaderPage';
import ErrorMessage from '../components/ErrorMessage';

import Project from '../features/Projects/Project';
import {
  fetchProjects,
  getProject,
  totalProjectsLength,
} from '../features/Projects/projectSlice';

function Projects() {
  const [id, setId] = useState(1);

  const projectsLength = useSelector(totalProjectsLength);
  const {
    projectSelected,
    loading: isLoading,
    error: errorMessage,
  } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (id >= projectsLength) setId(1);
    else setId((i) => i + 1);
  };

  const handleDecrement = () => {
    if (id <= 1) setId(projectsLength);
    else setId((i) => i - 1);
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  useEffect(() => {
    dispatch(getProject(id.toString()));
  }, [dispatch, id]);

  return (
    <Fragment>
      <HeaderPage title="My Portfolio" />
      <section className="project-page u-padding-vertical-hugo">
        <div className="container">
          <p className="project-page__length">
            Project {id} / {projectsLength}
          </p>

          {isLoading && <Spinner />}
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          {!errorMessage && !isLoading && (
            <Project projectItem={projectSelected} />
          )}

          <div className="project-item__pagination">
            <Button
              styleType="btn btn__secondary"
              onclick={handleDecrement}
              disabled={isLoading}
            >
              <ArrowLeft size={32} />
            </Button>
            <Button
              styleType="btn btn__secondary"
              onclick={handleIncrement}
              disabled={isLoading}
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
