import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

function Logo() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link className="logo-lnk" to="/">
      <LazyLoad height={30}>
        <img
          src="/imgs/logo-1.png"
          alt="Personal logo"
          className="logo"
          onClick={handleScrollTop}
        />
      </LazyLoad>
    </Link>
  );
}

export default Logo;
