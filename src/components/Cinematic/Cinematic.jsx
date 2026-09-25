import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Cinematic() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const horizonRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      if (horizonRef.current) {
        gsap.to(horizonRef.current, {
          y: -80, scale: 1.08, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      }
      if (textRef.current) {
        gsap.fromTo(textRef.current, { opacity: 0, y: 50, filter: 'blur(10px)' }, {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 70%' }
        });
      }
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="cinematic-section" ref={sectionRef}>
      <div className="cinematic-bg"></div>
      <div className="cinematic-horizon" ref={horizonRef}></div>
      <div className="cinematic-content" ref={textRef}>
        <span className="intro-tagline">{t.cinematic.tagline}</span>
        <h2 className="cinematic-heading">
          {t.cinematic.headingLine1}<br />
          {t.cinematic.headingLine2}
        </h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>{t.cinematic.desc}</p>
      </div>
    </section>
  );
}
