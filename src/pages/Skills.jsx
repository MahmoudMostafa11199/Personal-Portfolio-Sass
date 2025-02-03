import { skills } from '../redux/skills';

function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="heading heading__secondary">Skills</h2>

        <div className="skills">
          {skills.map((skill) => (
            <div key={skill.id} className="skills__item">
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

export default Skills;
