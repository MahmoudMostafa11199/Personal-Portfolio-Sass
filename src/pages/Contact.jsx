import { WhatsappLogo, MapPin, EnvelopeSimple } from '@phosphor-icons/react';

import Logo from '../components/Logo';
import Button from '../components/Button';
import Social from '../components/Social';

function Contact() {
  return (
    <div className="contact">
      <h2 className="heading heading__secondary">Contact</h2>
      <div className="contact-cols">
        <div className="contact__info">
          <Logo sec="contact" />
          <ul className="contact__info-list">
            <li>
              <h4>Phone</h4>
              <div className="contact__item">
                <WhatsappLogo className="contact__logo" size={24} />
                <a
                  className="contact__link"
                  href="https://wa.me/+201018672627"
                  target="_blank"
                  rel="noreferrer"
                >
                  +20 1018672627
                </a>
              </div>
            </li>
            <li>
              <h4>Address</h4>
              <div className="contact__item">
                <MapPin className="contact__logo" size={24} />
                <span className="position">Cairo, Egypt</span>
              </div>
            </li>
            <li>
              <h4>Email</h4>
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
          <Social borderColor="borderTop" hover="nine" />
        </div>

        <form
          className="contact__form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <div className="input-box">
            <input
              id="name"
              type="text"
              className="contact__form-input"
              placeholder=" "
              required
            />
            <label htmlFor="name" className="contact__form-label">
              Your Name
            </label>
          </div>

          <div className="input-box">
            <input
              id="email"
              type="email"
              className="contact__form-input"
              placeholder=""
              required
            />
            <label htmlFor="email" className="contact__form-label">
              Your Email
            </label>
          </div>
          <div className="input-box">
            <textarea
              id="message"
              className="contact__form-input"
              placeholder=""
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
  );
}

export default Contact;
