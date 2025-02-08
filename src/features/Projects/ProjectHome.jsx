/* eslint-disable react/prop-types */

import LazyLoad from 'react-lazyload';
import { GithubLogo, Eye } from '@phosphor-icons/react';

function Project({ project }) {
  const { title, description, image, liveLink, githubLink, technologies } =
    project;

  return (
    <div className="project" data-aos="fade-up">
      <div className="project__img-container">
        <LazyLoad height={300}>
          <img className="project__img" src={image} alt="Project-Image" />
        </LazyLoad>
        <div className="project__link">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link--live"
          >
            <Eye size={24} />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link--github"
          >
            <GithubLogo size={24} />
          </a>
        </div>
      </div>

      <div className="project__content">
        <h4 className="project__title" data-aos="fade-up">
          {title}
        </h4>
        <p className="project__description" data-aos="fade-up">
          {description}
        </p>
        <ul className="project__tech-list" data-aos="fade-up">
          {technologies.map((technology) => (
            <li
              className="project__tech"
              data-tech={technology.split(' ').join('').toLowerCase()}
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
