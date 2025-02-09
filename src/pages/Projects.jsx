import { Fragment, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';

import Button from '../components/Button';
import Spinner from '../components/Spinner';
import HeaderPage from '../components/HeaderPage';
import ErrorMessage from '../components/ErrorMessage';

import Project from '../features/Projects/Project';
import { fetchProjects, getProject } from '../features/Projects/projectSlice';

function Projects() {
  const {
    projects: projectAll,
    projectSelected,
    loading: isLoading,
    error: errorMessage,
  } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get('id') || '1';

  const totalProjects = useMemo(() => {
    return projectAll.length;
  }, [projectAll]);

  const handleIncrement = () => {
    id = parseInt(id) + 1;
    if (id > totalProjects) id = 1;
    setSearchParams({ id });
  };

  const handleDecrement = () => {
    id = parseInt(id) - 1;
    if (id <= 0) id = totalProjects;
    setSearchParams({ id });
  };

  useEffect(() => {
    if (!totalProjects) dispatch(fetchProjects());
  }, [dispatch, totalProjects]);

  useEffect(() => {
    dispatch(getProject(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <HeaderPage title="My Portfolio" />
      <section className="project-page u-padding-vertical-hugo">
        <div className="container">
          <p className="project-page__length">
            Project {parseInt(id)} / {totalProjects}
          </p>

          {isLoading && <Spinner />}
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          {!isLoading && !errorMessage && (
            <Project projectItem={projectSelected} />
          )}

          <div className="project-item__pagination">
            <Button
              styleType="btn btn__secondary"
              onclick={handleDecrement}
              disabled={isLoading || errorMessage}
            >
              <ArrowLeft size={32} />
            </Button>
            <Button
              styleType="btn btn__secondary"
              onclick={handleIncrement}
              disabled={isLoading || errorMessage}
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
