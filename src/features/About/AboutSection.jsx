import Button from '../../components/Button';
import HeadingSection from '../../components/HeadingSection';

import { downloadCv } from '../../utils/downloadCv';

function About() {
  const calcAge = () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1999;

    return currentYear - birthYear;
  };

  return (
    <section className="about-section">
      <div className="container">
        <HeadingSection>About me</HeadingSection>
        <div className="about">
          <div className="about__img-box" data-aos="fade-up-right">
            <img
              src="imgs/mahmoud.png"
              // src="imgs/mahmoud-edit.webp"
              alt="personal-photo"
              className="about__img"
            />
          </div>

          <div className="about__text-box">
            <h3 className="headeing heading__tertiary" data-aos="fade-up">
              Hi 👋🏻, I&apos;m Mahmoud Mostafa
            </h3>
            <p className="about__description" data-aos="fade-up">
              I am a front-end developer And I have a passion for creating
              amazing and intuitive user interfaces. With my strong HTML, CSS,
              JavaScript, and React skills, I can create interactive and
              attractive websites and applications that provide an exceptional
              user experience. I can take mockups of the design and translate
              them into fully functional web pages, ensuring that the final
              product not only looks great, it also works smoothly
            </p>

            <div className="about__info" data-aos="fade-up">
              <div>
                <p>
                  <span className="title">Age:</span>
                  <span className="text"> {calcAge()}</span>
                </p>
                <p>
                  <span className="title">Country:</span>
                  <span className="text"> Egypt</span>
                </p>
                {/* <p>
                  <span className='title'>Languages:</span>
                  <span className='text'>Arabic, English</span>
                </p> */}
              </div>
              <div>
                <p>
                  <span className="title">Email:</span>
                  <span className="text"> melshahat799@gmail.com</span>
                </p>
                <p>
                  <span className="title">Phone:</span>
                  <span className="text"> +20 1018672627</span>
                </p>
                {/* <p>
                  <span className='title'>Marital Status:</span>
                  <span className='text'> Single</span>
                </p> */}
              </div>
            </div>

            <Button
              styleType="btn btn__secondary"
              type="cv"
              onclick={downloadCv}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
