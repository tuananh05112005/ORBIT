import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      linesRef.current.forEach((line) => {
        if (!line) return;
        gsap.to(line, {
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.8,
            toggleActions: 'play none none reverse'
          },
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          ease: 'power2.out'
        });
      });
    }, el);
    return () => ctx.revert();
  }, [t]);

  return (
    <section className="intro-section" ref={sectionRef}>
      <div className="intro-ambient-glow"></div>
      <div className="container">
        <div className="intro-content">
          <span className="intro-tagline">{t.intro.tagline}</span>
          <h2 className="intro-heading">
            <span className="intro-line" ref={(el) => (linesRef.current[0] = el)}>{t.intro.line1}</span>
            <span className="intro-line intro-line-accent" ref={(el) => (linesRef.current[1] = el)}>{t.intro.line2}</span>
            <span className="intro-line" ref={(el) => (linesRef.current[2] = el)}>{t.intro.line3}</span>
          </h2>
          <p className="intro-footnote">{t.intro.footnote}</p>
        </div>
      </div>
    </section>
  );
}
