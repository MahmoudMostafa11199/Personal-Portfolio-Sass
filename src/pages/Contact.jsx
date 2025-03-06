import { WhatsappLogo, MapPin, EnvelopeSimple } from '@phosphor-icons/react';

import Button from '../components/Button';
import Social from '../components/Social';
import HeadingSection from '../components/HeadingSection';

import SendMessageTelegram from '../utils/sendMessageTelegram';

function Contact() {
  const { formData, handleChange, handleSubmit } = SendMessageTelegram();

  return (
    <section className="contact">
      <div className="container">
        <HeadingSection>Contact</HeadingSection>
        <div className="contact-cols">
          <div className="contact__info">
            <ul className="contact__info-list">
              <li data-aos="fade-up">
                <h4 className="contact__title">Phone</h4>
                <div className="contact__item">
                  <WhatsappLogo className="contact__logo" size={24} />
                  <a
                    className="contact__link"
                    href="https://wa.me/+201141316313"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +20 1141316313
                  </a>
                </div>
              </li>
              <li data-aos="fade-up">
                <h4 className="contact__title">Address</h4>
                <div className="contact__item">
                  <MapPin className="contact__logo" size={24} />
                  <span className="position">Cairo, Egypt</span>
                </div>
              </li>
              <li data-aos="fade-up">
                <h4 className="contact__title">Email</h4>
                <div className="contact__item">
                  <EnvelopeSimple className="contact__logo" size={24} />
                  <a
                    className="contact__link"
                    href="mailto:melshahat799@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    melshahat799@gmail.com
                  </a>
                </div>
              </li>
            </ul>
            <Social />
          </div>

          <form
            className="contact__form"
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <div className="input-box" data-aos="fade-up">
              <input
                id="name"
                type="text"
                className="contact__form-input"
                placeholder=""
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name" className="contact__form-label">
                Your Name
              </label>
            </div>

            <div className="input-box" data-aos="fade-up">
              <input
                id="email"
                type="email"
                className="contact__form-input"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="contact__form-label">
                Your Email
              </label>
            </div>
            <div className="input-box" data-aos="fade-up">
              <textarea
                id="message"
                className="contact__form-input"
                placeholder=""
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message" className="contact__form-label">
                Your Message
              </label>
            </div>
            <Button styleType="btn btn__primary" type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
