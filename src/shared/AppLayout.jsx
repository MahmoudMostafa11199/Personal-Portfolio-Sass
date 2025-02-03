import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  const location = useLocation().pathname;

  return (
    <div>
      <Header />

      <main>{location === '/contact' || <Outlet />}</main>

      <Footer />
    </div>
  );
}

export default AppLayout;
