import { useEffect, useState } from 'react';
import Lazyload from 'react-lazyload';

import { downloadCv } from '../../utils/downloadCv';

import Button from '../../components/Button';
import HeadingSection from '../../components/HeadingSection';

function About() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calcAgeAPI = async () => {
      const res = await fetch(
        'https://api.apiverve.com/v1/agecalculator?dob=1999-11-01',
        {
          headers: {
            'x-api-key': '5d1e6301-b85f-4e49-8fe4-1dfc13454e0c',
            'Content-Type': 'application/json',
          },
        }
      );
      const { data } = await res.json();
      setAge(data.age_years);
    };

    calcAgeAPI();
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <HeadingSection>About me</HeadingSection>
        <div className="about">
          <div className="about__img-box" data-aos="fade-up-right">
            <Lazyload height={550}>
              <img
                src="imgs/mahmoud.png"
                alt="personal-photo"
                className="about__img"
              />
            </Lazyload>
          </div>

          <div className="about__text-box">
            <h3 className="headeing heading__tertiary" data-aos="fade-up">
              Hello 👋🏻, I&apos;m Mahmoud Mostafa
            </h3>
            <p className="about__description" data-aos="fade-up">
              I&apos;m a Front-end Developer and I have a passion for creating
              amazing and intuitive user interfaces. With my strong HTML, CSS,
              JavaScript, React.js, Next.js and Vue skills, I can create
              interactive and attractive websites and applications that provide
              an exceptional user experience. I can take mockups of the design
              and translate them into fully functional web pages, ensuring that
              the final product not only looks great, it also works smoothly
            </p>

            <div className="about__info" data-aos="fade-up">
              <div>
                <p>
                  <span className="title">Age:</span>
                  <span className="text"> {age}</span>
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
                  <span className="text"> +20 1141316313</span>
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
