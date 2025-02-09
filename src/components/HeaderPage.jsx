import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

HeaderPage.propTypes = {
  title: PropTypes.string.isRequired,
};

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
