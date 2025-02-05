import React from 'react';

import Contact from './Contact';

import Button from '../components/Button';
// import Social from '../components/Social';
import { downloadCv } from '../utils/downloadCv';

import AboutSection from '../features/About/AboutSection';
import Education from '../features/experience/Education';
import Services from '../features/skills/Services';
import Skills from './Skills';
import Projects from './Projects';

function Home() {
  const handleToFooter = () => {
    const footerEl = document.querySelector('footer');
    footerEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <section className="home-section">
        <div className="home">
          <div className="home__text-box" data-aos="fade-right">
            <h1 className="heading heading__primary">
              Hello, My name is
              <br />
              <span className="username">Mahmoud Mostafa</span>
            </h1>

            <p className="job">I&apos;m a frontend Web Developer</p>
            <div className="home__buttons">
              <Button styleType="btn btn__primary" onclick={handleToFooter}>
                Contact Me
              </Button>
              <Button styleType="btn btn__secondary" onclick={downloadCv}>
                Download Cv
              </Button>
            </div>
          </div>
          <div className="home__img-box" data-aos="fade-left">
            <img
              src="/imgs/mahmoud.png"
              alt="perosnal img"
              className="home__img"
            />
          </div>

          {/* <Social sec="sec-home" /> */}
        </div>
      </section>

      <AboutSection />
      <Education />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default Home;

/* 
    import Typed from "typed.js";
      useEffect(() => {
        const options = {
          strings: ["I'm Mahmoud Mostafa"],
          typeSpeed: 80,
          backSpeed: 70,
          loop: true,
          cursorChar: "",
        };
          
        const typed = new Typed(".my-name", options);
          
        return () => {
          typed.destroy(); // Clean up on component unmount
        };
      }, []);
            
            
      <h1 className="my-name heading heading__primary"></h1>
*/
