// eslint-disable-next-line react/prop-types
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
