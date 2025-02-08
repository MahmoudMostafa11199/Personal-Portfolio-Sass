import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react';

import Lazyload from 'react-lazyload';

function Project({ projectItem }) {
  const { id, title, description, image, liveLink, githubLink, technologies } =
    projectItem;

  return (
    <div className="project-item">
      <div className="project-item__content" data-aos="fade-right">
        <span className="project-item__index">{id > 9 ? id : `0${id}`}</span>

        <h3 className="project-item__title">{title}</h3>

        <p className="project-item__description">{description}</p>

        <ul className="project__tech-list">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="project__tech"
              data-tech={tech.split(' ').join('').toLowerCase()}
            >
              {tech}
            </li>
          ))}
          <li className="project__tech" data-tech="next">
            Next js
          </li>
        </ul>

        <hr />

        <div className="project-item__link-list" data-aos="fade-up">
          <a href={liveLink} className="project-item__link" target="_blank">
            <ArrowUpRight size={24} />
          </a>
          <a href={githubLink} className="project-item__link" target="_blank">
            <GithubLogo size={24} />
          </a>
        </div>
      </div>

      <div className="project-item__img-container" data-aos="fade-left">
        <Lazyload height={300}>
          <img className="project-item__img" src={image} alt="map-workout" />
        </Lazyload>
      </div>
    </div>
  );
}

export default Project;
