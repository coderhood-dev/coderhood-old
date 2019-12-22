import { useState, useEffect } from 'react';

export default function useDidScroll() {
  const [didScroll, setDidScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!didScroll && window.scrollY > 0) {
        setDidScroll(true);
      } else if (didScroll && window.scrollY === 0) {
        setDidScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return didScroll;
}
