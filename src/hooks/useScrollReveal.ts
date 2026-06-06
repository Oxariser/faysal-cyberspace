import { useEffect } from 'react';

/**
 * Adds a global IntersectionObserver that toggles the `.in-view` class
 * on any element with `data-reveal` (or `.reveal`) when it enters viewport.
 * Used for 3D scroll reveal effects defined in index.css.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const selector = '[data-reveal], .reveal';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const scan = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains('in-view')) observer.observe(el);
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
};
