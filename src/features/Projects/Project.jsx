import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react';

import Lazyload from 'react-lazyload';

function Project() {
  return (
    <div className="project-item">
      <div className="project-item__content">
        <span className="project-item__index">01</span>

        <h3 className="project-item__title">The Wild Oasis</h3>

        <p className="project-item__description">
          An internal hotel management system that streamlines hotel bookings,
          cabin management, and guest services
        </p>

        <ul className="project__tech-list">
          <li className="project__tech" data-tech="react">
            React
          </li>
          <li className="project__tech" data-tech="reactquery">
            React Query
          </li>
          <li className="project__tech" data-tech="reactrouter">
            React Router
          </li>
          <li className="project__tech" data-tech="styledcomponents">
            Styled Components
          </li>
          <li className="project__tech" data-tech="supabase">
            Supabase
          </li>
          <li className="project__tech" data-tech="reacthooksform">
            React Hooks Form
          </li>
        </ul>

        <div className="project-item__link-list">
          <a href="#" className="project-item__link">
            <ArrowUpRight size={24} />
          </a>
          <a href="#" className="project-item__link">
            <GithubLogo size={24} />
          </a>
        </div>
      </div>

      <div className="project-item__img-container">
        <Lazyload height={300}>
          <img
            className="project-item__img shadow-md"
            src="/imgs/projects/original/map-workout.png"
            alt="map-workout"
          />
        </Lazyload>
      </div>
    </div>
  );
}

export default Project;
