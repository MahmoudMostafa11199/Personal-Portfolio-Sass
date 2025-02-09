import PropTypes from 'prop-types';

Button.propTypes = {
  styleType: PropTypes.string.isRequired,
  type: PropTypes.string,
  onclick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

function Button({ styleType, type, onclick = null, disabled, children }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={styleType}
      onClick={onclick}
      data-aos="fade-up"
      disabled={disabled}
    >
      {children}
    </button>
  );

  /* if (type === 'submit')
  return (
  <button type="submit" className={styles[styleType]}>
  {children}
  </button>
  );
  
  if (type === 'btnCv')
  return (
  <button className={styles[styleType]} onClick={handleDownload}>
  {children}
  </button>
  );
  
  return (
    <button className={styles[styleType]} onClick={handleDownload}>
    {children}
    </button>
    ); */
}

export default Button;
