import PropTypes from 'prop-types';
import {
  FacebookLogo,
  LinkedinLogo,
  GithubLogo,
  XLogo,
  InstagramLogo,
} from '@phosphor-icons/react';

Social.propTypes = {
  sec: PropTypes.string,
};

function Social({ sec = '' }) {
  return (
    <div className={`social ${sec}`}>
      <ul className="social__list">
        <li>
          <a
            className="social__link"
            href="https://www.facebook.com/profile.php?id=100008875276412"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Profile"
          >
            <FacebookLogo size={28} />
            {sec === 'sec-home' && <span>Facebook</span>}
          </a>
        </li>
        <li>
          <a
            className="social__link"
            href="https://www.linkedin.com/in/mahmoud-mostafa-7417b51b1"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedinLogo size={28} />
            {sec === 'sec-home' && <span>LinkedIn</span>}
          </a>
        </li>
        <li>
          <a
            className="social__link"
            href="https://github.com/MahmoudMostafa11199"
            target="_blank"
            rel="noreferrer"
            aria-label="Github Profile"
          >
            <GithubLogo size={28} />
            {sec === 'sec-home' && <span>Github</span>}
          </a>
        </li>
        <li>
          <a
            className="social__link"
            href="https://x.com/m_elshahat11199"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile"
          >
            <XLogo size={28} />
            {sec === 'sec-home' && <span>Twitter</span>}
          </a>
        </li>
        <li>
          <a
            className="social__link"
            href="https://www.instagram.com/mahmoud_mustafa001/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Profile"
          >
            <InstagramLogo size={28} />
            {sec === 'sec-home' && <span>Instagram</span>}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
