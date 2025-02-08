function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <p className="copyright">
          <span className="copyright__mark">&copy; </span>
          {year} <span className="copyright__user">Mahmoud Mostafa. </span>
          All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
