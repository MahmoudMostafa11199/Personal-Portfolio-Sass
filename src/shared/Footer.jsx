import Contact from '../pages/Contact';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <Contact />
      </div>
      <p className="copyright">
        <span className="copyright__mark">&copy; </span>
        {year} <span className="copyright__user">Mahmoud Mostafa. </span>
        All Right Reserved
      </p>
    </footer>
  );
}

export default Footer;
