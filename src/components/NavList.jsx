import React from 'react';
import { Link } from 'react-router-dom';

function NavList() {
  return (
    <React.Fragment>
      <li>
        <Link to="/" className="main-nav__link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="main-nav__link">
          About
        </Link>
      </li>
      <li>
        <Link to="/skills" className="main-nav__link">
          Skills
        </Link>
      </li>
      <li>
        <Link to="/projects" className="main-nav__link">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="main-nav__link">
          Contact
        </Link>
      </li>
    </React.Fragment>
  );
}

export default NavList;
