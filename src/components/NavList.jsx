import React from 'react';
import { Link } from 'react-router-dom';

// function NavList({ link, style }) {
function NavList() {
  return (
    <React.Fragment>
      <li>
        <Link to="/" className="main-nav__link">
          home
        </Link>
      </li>
      <li>
        <Link to="/about" className="main-nav__link">
          about
        </Link>
      </li>
      <li>
        <Link to="/skills" className="main-nav__link">
          skills
        </Link>
      </li>
      <li>
        <Link to="/projects" className="main-nav__link">
          projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="main-nav__link">
          contact
        </Link>
      </li>
    </React.Fragment>
  );
}

export default NavList;

// <li key={link}>
//   <Link to={/#${link}`} className={style.main-nav__link}>
//     {link}
//   </Link>
// </li>
