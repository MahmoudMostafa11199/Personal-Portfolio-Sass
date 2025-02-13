import { GraduationCap, Briefcase } from '@phosphor-icons/react';

import { educationData, experienceData } from './educationsData';

import HeadingSection from '../../components/HeadingSection';

function Education() {
  return (
    <section className="experience-section">
      <div className="container">
        <HeadingSection>Education & Experience</HeadingSection>
        <div className="experience__container">
          <div className="experience__line" data-aos="zoom-in"></div>

          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="experience__item"
              data-id={edu.id}
              data-aos="fade-right"
            >
              <div className="experience__content">
                <h4 className="experience__degree">{edu.degree}</h4>
                <p className="experience__institution">
                  {edu.institution}
                  <span className="experience__duration">
                    {edu.startYear} - {edu.endYear}
                  </span>
                </p>
                <p className="experience__details">{edu.details}</p>
                <GraduationCap
                  data-icon={edu.type}
                  className="experience__icon"
                  size={32}
                />
              </div>
            </div>
          ))}
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="experience__item"
              data-id={exp.id}
              data-aos="fade-left"
            >
              <div className="education__content">
                <h4 className="experience__degree">{exp.specialization}</h4>
                <p className="experience__institution">
                  {exp.institution}
                  <span className="experience__duration">
                    {exp.startYear} - {exp.endYear}
                  </span>
                </p>
                <p className="experience__details">{exp.details}</p>
                <Briefcase
                  data-icon={exp.type}
                  className="experience__icon"
                  size={32}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
