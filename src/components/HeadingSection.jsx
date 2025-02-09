import PropTypes from 'prop-types';

HeadingSection.propTypes = {
  children: PropTypes.node.isRequired,
};

function HeadingSection({ children }) {
  return (
    <h2 className="heading heading__secondary" data-aos="fade-right">
      {children}
    </h2>
  );
}

export default HeadingSection;
