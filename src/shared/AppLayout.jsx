import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  const location = useLocation().pathname;

  useEffect(() => {
    document.querySelector('.header').classList.remove('open-nav');
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
