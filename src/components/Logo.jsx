import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className="logo-lnk" to="/">
      <LazyLoad height={30}>
        <img src="imgs/logo-1.png" alt="Personal logo" className="logo" />
      </LazyLoad>
    </Link>
  );
}

export default Logo;
