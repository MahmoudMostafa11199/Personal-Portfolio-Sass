import PropTypes from 'prop-types';
import {
  FacebookLogo,
  LinkedinLogo,
  GithubLogo,
  XLogo,
  InstagramLogo,
} from '@phosphor-icons/react';

Social.propTypes = {
  borderColor: PropTypes.string,
  hover: PropTypes.string,
  sec: PropTypes.string,
};

function Social({ borderColor = '', hover = '', sec = '' }) {
  return (
    <div className={`social ${borderColor} ${sec}`}>
      <ul className="social__list">
        {sec === 'sec-home' && <div className="social__text">Follow me</div>}
        <li>
          <a
            className={`social__link  ${hover}`}
            href="https://www.facebook.com/profile.php?id=100008875276412"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookLogo size={28} />
          </a>
        </li>
        <li>
          <a
            className={`social__link  ${hover}`}
            href="https://www.linkedin.com/in/mahmoud-mustafa-7417b51b1"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={28} />
          </a>
        </li>
        <li>
          <a
            className={`social__link  ${hover}`}
            href="https://github.com/MahmoudMostafa11199"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={28} />
          </a>
        </li>
        <li>
          <a
            className={`social__link  ${hover}`}
            href="https://x.com/m_elshahat11199"
            target="_blank"
            rel="noreferrer"
          >
            <XLogo size={28} />
          </a>
        </li>
        <li>
          <a
            className={`social__link  ${hover}`}
            href="https://www.instagram.com/mahmoud_mustafa001/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={28} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
