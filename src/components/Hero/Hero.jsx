import React, { useEffect, useRef, useState } from 'react';
import '../../styles/hero.css';
import HeroCanvas from './HeroCanvas';
import Button from '../ui/Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ isLoaded }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.2 })
        .fromTo('.hero-title-line', { opacity: 0, y: 45, filter: 'blur(12px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, stagger: 0.18 }, '-=0.6')
        .fromTo('.hero-subtext', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
        .fromTo('.hero-ctas > *', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, '-=0.6')
        .fromTo(['.hero-scroll-indicator', '.hero-hud'], { opacity: 0 }, { opacity: 1, duration: 1.2 }, '-=0.4');

      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: 1
        },
        opacity: 0,
        y: -60,
        filter: 'blur(8px)'
      });
    }, heroRef);
    return () => ctx.revert();
  }, [isLoaded]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-canvas-container">
        <HeroCanvas mousePos={mousePos} />
      </div>
      <div className="hero-vignette" />
      <div className="hero-bottom-fade" />

      <div className="container">
        <div className="hero-content" ref={contentRef}>
          <div className="hero-badge">
            <span className="hero-badge__dot"></span>
            <span className="hero-badge__text">{t.hero.badge}</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-line">{t.hero.titleLine1}</span>
            <span className="hero-title-line hero-title-accent">{t.hero.titleLine2}</span>
          </h1>
          <p className="hero-subtext">{t.hero.subtext}</p>
          <div className="hero-ctas">
            <Button variant="primary" size="lg" onClick={() => scrollTo('technology')} data-cursor="EXPLORE">
              {t.hero.ctaPrimary}
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollTo('missions')} data-cursor="VIEW">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      <div className="hero-hud">
        <div className="hero-hud__status">
          <span className="hero-hud__pulse"></span>
          <span>{t.hero.hudStatus}</span>
        </div>
        <div>COORD: RA 19h 50m / DEC +08�52?</div>
        <div>{t.hero.hudNominal}</div>
      </div>

      <div
        className="hero-scroll-indicator"
        onClick={() => scrollTo('technology')}
        role="button"
        tabIndex={0}
        aria-label="Scroll to explore"
      >
        <div className="hero-scroll-indicator__line"></div>
        <span>{t.hero.scrollIndicator}</span>
      </div>
    </section>
  );
}
