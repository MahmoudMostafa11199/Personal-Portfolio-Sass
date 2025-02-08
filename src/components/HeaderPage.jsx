/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function HeaderPage({ title }) {
  return (
    <section className="header-page">
      <h1
        className="heading heading__primary heading__primary--big"
        data-aos="fade-up"
      >
        {title}
      </h1>
      <Link to="/" className="btn btn__primary" data-aos="fade-up">
        Home / {title}
      </Link>
    </section>
  );
}

export default HeaderPage;
