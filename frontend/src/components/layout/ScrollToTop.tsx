import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const prevNavRef = useRef({ pathname: '', search: '' });

  useEffect(() => {
    const isNewLocation = 
      prevNavRef.current.pathname !== pathname || 
      prevNavRef.current.search !== search;

    prevNavRef.current = { pathname, search };

    if (hash) {
      // Allow DOM to settle, then scroll to hash target
      const targetId = hash.replace(/^#/, '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        const timer = setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
        return () => clearTimeout(timer);
      }
    } else if (isNewLocation) {
      // Instant reset to the top of the new page/view
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, search, hash]);

  return null;
}

