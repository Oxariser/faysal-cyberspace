import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Expose for anchor scrolls
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Override smooth scrollIntoView used by nav buttons
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (arg?: boolean | ScrollIntoViewOptions) {
      const rect = (this as HTMLElement).getBoundingClientRect();
      const top = window.scrollY + rect.top;
      lenis.scrollTo(top, { offset: -80 });
      return undefined as unknown as void;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      originalScrollIntoView;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      arg;
    };

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      Element.prototype.scrollIntoView = originalScrollIntoView;
    };
  }, []);
};
