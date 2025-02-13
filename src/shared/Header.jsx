import { useRef } from 'react';
import PropTypes from 'prop-types';
import { List, XCircle } from '@phosphor-icons/react';

import Logo from '../components/Logo';
import NavList from '../components/NavList';

Header.propTypes = {
  isOpenNav: PropTypes.bool.isRequired,
  setIsOpenNav: PropTypes.func.isRequired,
};
function Header({ isOpenNav, setIsOpenNav }) {
  const headerEl = useRef(null);

  const handleNav = () => {
    setIsOpenNav(!isOpenNav);
    headerEl.current.classList.toggle('open-nav');
  };

  return (
    <header className="header sticky" ref={headerEl}>
      <Logo />
      <nav className="main-nav">
        <ul className="main-nav__list">
          <NavList />
        </ul>
      </nav>
      <button
        className="main-nav__icon"
        aria-label={
          isOpenNav ? 'Close navigation menu' : 'Open navigation menu'
        }
        onClick={handleNav}
      >
        {!isOpenNav ? (
          <List className="mobile__nav" size={35} />
        ) : (
          <XCircle className="mobile__nav" size={35} />
        )}
      </button>
    </header>
  );
}

export default Header;

// <NavList style={styles}}/>
/*
  
  {navLink.map((link) => (
            <NavList key={link} link={link} styles={styles} />
          ))}

  <header class="header">
    <button class="main-nav__icon">
      <ion-icon class="mobile-nav" name="menu-outline"></ion-icon>
      <ion-icon class="mobile-nav" name="close-outline"></ion-icon>
    </button>
  </header> 
*/
