import PropTypes from 'prop-types';

Button.propTypes = {
  styleType: PropTypes.string.isRequired,
  type: PropTypes.string,
  onclick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

function Button({
  styleType,
  type,
  onclick = null,
  disabled,
  label,
  children,
}) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={styleType}
      onClick={onclick}
      aria-label={label || null}
      data-aos="fade-up"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
