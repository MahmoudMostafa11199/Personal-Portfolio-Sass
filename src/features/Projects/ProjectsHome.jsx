import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import HeadingSection from '../../components/HeadingSection';
import Filter from '../../components/Filter';
import Project from './ProjectHome';

import { portfolioData, portfolioDataAll } from './projectsData';

function Projects() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category') || 'all';

  let projects;
  if (category === 'all') projects = portfolioDataAll.slice(0, 6);
  if (category === 'html-css')
    projects = portfolioData.projectsStatic.slice(0, 6).reverse();
  if (category === 'js')
    projects = portfolioData.projectsJS.slice(0, 6).reverse();
  if (category === 'react')
    projects = portfolioData.projectsReact.slice().reverse();

  return (
    <section className="projects-section">
      <div className="container">
        <HeadingSection>My Portfolio</HeadingSection>

        {/* TAP */}
        <Filter
          filterField="category"
          options={[
            { value: 'all', label: 'All' },
            { value: 'html-css', label: 'HTML & CSS' },
            { value: 'js', label: 'JS' },
            { value: 'react', label: 'React' },
          ]}
        />

        <div className="projects">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>

        <Link className="view-more" to="/projects" data-aos="fade-up">
          <span>View More</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
