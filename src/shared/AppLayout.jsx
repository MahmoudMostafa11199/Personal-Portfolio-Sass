import { useEffect, useState } from 'react';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function AppLayout() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    setIsOpenNav(false);
    document.querySelector('.header').classList.remove('open-nav');
  }, [location]);

  return (
    <>
      <Header isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
      <ScrollRestoration />

      <main>
        <Outlet />
        <ScrollToTop />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
