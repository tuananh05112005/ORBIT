import React, { useEffect, useRef } from 'react';
import SectionLabel from '../ui/SectionLabel/SectionLabel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Technology() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tech-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' }
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="technology" className="technology-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <SectionLabel number="01" text={t.technology.sectionLabel} />
          <h2 className="section-title">{t.technology.sectionTitle}</h2>
          <p className="section-desc">{t.technology.sectionDesc}</p>
        </div>

        <div className="tech-grid">
          {t.technology.cards.map((tech) => (
            <div key={tech.id} className="tech-card" data-cursor="EXPLORE">
              <div>
                <div className="tech-card__top">
                  <span className="tech-card__id">{tech.id}</span>
                  <span className="tech-card__tag">{tech.tag}</span>
                </div>
                <h3 className="tech-card__title">{tech.title}</h3>
                <div className="tech-card__subtitle">{tech.subtitle}</div>
                <p className="tech-card__desc">{tech.description}</p>
              </div>
              <div>
                <div className="tech-card__specs">
                  {tech.specs.map((spec, idx) => (
                    <div key={idx} className="tech-card__spec-item">
                      <span className="tech-card__spec-label">{spec.label}</span>
                      <span className="tech-card__spec-val">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="tech-card__highlight">{tech.highlight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
