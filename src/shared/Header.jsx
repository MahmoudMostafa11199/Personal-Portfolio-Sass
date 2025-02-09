import { useEffect } from 'react';
import { List, XCircle } from '@phosphor-icons/react';

import Logo from '../components/Logo';
import NavList from '../components/NavList';

function Header() {
  useEffect(() => {
    document
      .querySelector('.main-nav__icon')
      ?.addEventListener('click', function () {
        document.querySelector('.header').classList.toggle('open-nav');
      });

    return () => {
      document
        .querySelector('.main-nav__icon')
        ?.removeEventListener('click', this);
    };
  }, []);

  return (
    <header className="header sticky">
      <Logo />
      <nav className="main-nav">
        <ul className="main-nav__list">
          <NavList />
        </ul>
      </nav>
      <button className="main-nav__icon">
        <List className="mobile__nav mobile__nav--open" size={35} />
        <XCircle className="mobile__nav mobile__nav--close" size={35} />
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
