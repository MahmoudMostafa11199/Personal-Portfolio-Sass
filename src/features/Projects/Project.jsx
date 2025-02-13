import Lazyload from 'react-lazyload';
import PropTypes from 'prop-types';
import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react';

Project.propTypes = {
  projectItem: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    liveLink: PropTypes.string,
    githubLink: PropTypes.string,
    length: PropTypes.number,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

function Project({ projectItem }) {
  const { id, title, description, image, liveLink, githubLink, technologies } =
    projectItem;
  const formattedId = id > 9 ? id : `0${id}`;

  if (!id) return;

  return (
    <div className="project-item">
      <ProjectContent
        id={formattedId}
        title={title}
        description={description}
        technologies={technologies}
        liveLink={liveLink}
        githubLink={githubLink}
      />

      <ProjectImage image={image} title={title} />
    </div>
  );
}

/* eslint-disable react/prop-types */
function ProjectContent({
  id,
  title,
  description,
  liveLink,
  githubLink,
  technologies,
}) {
  return (
    <div className="project-item__content" data-aos="fade-right">
      <span className="project-item__index">{id}</span>

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
      </ul>

      <hr />

      <div className="project-item__link-list" data-aos="fade-up">
        <ProjectLink
          href={liveLink}
          name="Live"
          icon={<ArrowUpRight size={24} />}
        />
        <ProjectLink
          href={githubLink}
          name="Github"
          icon={<GithubLogo size={24} />}
        />
      </div>
    </div>
  );
}

function ProjectLink({ href, icon, name }) {
  return (
    <a
      href={href}
      className="project-item__link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to ${name} project`}
    >
      {icon}
    </a>
  );
}

function ProjectImage({ image, title }) {
  return (
    <div className="project-item__img-container" data-aos="fade-left">
      <Lazyload height={300}>
        <img className="project-item__img" src={image} alt={title} />
      </Lazyload>
    </div>
  );
}

export default Project;
