import { useEffect, useRef } from 'react';
import { ArrowUp } from '@phosphor-icons/react';

function ScrollToTop() {
  const scrollBtnEl = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        scrollBtnEl.current.classList.add('show');
      } else {
        scrollBtnEl.current.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      ref={scrollBtnEl}
      className="btn btn__primary btn__scroll-top"
      onClick={() => window.scrollTo(0, 0)}
      aria-label="Scroll to top"
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-offset="100"
    >
      <ArrowUp size={28} />
    </button>
  );
}

export default ScrollToTop;
