import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorTracker from '@/components/CursorTracker';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  useSmoothScroll();
  useScrollReveal();
  return (
    <div className="min-h-screen cursor-none scroll-perspective">
      <CursorTracker />
      <Header />
      <main>
        <section data-reveal className="reveal-3d"><Hero /></section>
        <section data-reveal className="reveal-3d reveal-tilt-left"><About /></section>
        <section data-reveal className="reveal-3d reveal-tilt-right"><Skills /></section>
        <section data-reveal className="reveal-3d"><Portfolio /></section>
        <section data-reveal className="reveal-3d reveal-tilt-left"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
