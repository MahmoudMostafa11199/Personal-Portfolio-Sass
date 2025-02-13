import { ArrowUp } from '@phosphor-icons/react';

function ScrollToTop() {
  return (
    <button
      className="btn btn__primary btn__scroll-top"
      onClick={() => window.scrollTo(0, 0)}
      aria-label="Scroll to top"
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-offset="600"
    >
      <ArrowUp size={28} />
    </button>
  );
}

export default ScrollToTop;
