import PropTypes from 'prop-types';
import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react';
import Lazyload from 'react-lazyload';

Project.propTypes = {
  projectItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

function Project({ projectItem }) {
  const { id, title, description, image, liveLink, githubLink, technologies } =
    projectItem;

  const formattedId = id > 9 ? id : `0${id}`;

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

      <ProjectImage image={image} />
    </div>
  );
}

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
        {technologies?.map((tech) => (
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
        <ProjectLink href={liveLink} icon={<ArrowUpRight size={24} />} />
        <ProjectLink href={githubLink} icon={<GithubLogo size={24} />} />
      </div>
    </div>
  );
}

function ProjectLink({ href, icon }) {
  return (
    <a
      href={href}
      className="project-item__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function ProjectImage({ image }) {
  return (
    <div className="project-item__img-container" data-aos="fade-left">
      <Lazyload height={300}>
        <img className="project-item__img" src={image} alt="map-workout" />
      </Lazyload>
    </div>
  );
}

export default Project;
