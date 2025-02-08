import HeadingSection from '../../components/HeadingSection';
import { skills } from './skills';

function SkillSection() {
  return (
    <section className="skills-section">
      <div className="container">
        <HeadingSection>Skills</HeadingSection>

        <div className="skills">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="skills__item"
              data-aos="zoom-in-down"
            >
              <svg
                className="skills__img"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <use xlinkHref={skill.img}></use>
              </svg>
              <h4 className="skills__title">{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
