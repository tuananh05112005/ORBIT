import React, { useEffect, useRef } from 'react';
import SectionLabel from '../ui/SectionLabel/SectionLabel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const sectionRef = useRef(null);
  const lineProgressRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      if (lineProgressRef.current) {
        gsap.to(lineProgressRef.current, {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 70%',
            end: 'bottom 85%',
            scrub: 0.5
          }
        });
      }
      el.querySelectorAll('.mission-node').forEach((node) => {
        gsap.fromTo(node, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: node, start: 'top 80%' }
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="missions" className="missions-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <SectionLabel number="03" text={t.missions.sectionLabel} />
          <h2 className="section-title">{t.missions.sectionTitle}</h2>
          <p className="section-desc">{t.missions.sectionDesc}</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-line-progress" ref={lineProgressRef}></div>

          {t.missions.list.map((mission) => (
            <div key={mission.id} className="mission-node">
              <div className="mission-center-marker"></div>
              <div className="mission-meta-side">
                <span className="mission-code">{mission.year} // {t.missions.trajectoryLabel}</span>
                <span className="tech-card__spec-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
                  {t.missions.orbitLabel}: {mission.orbit}
                </span>
                <span className="tech-card__spec-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
                  {t.missions.durationLabel}: {mission.duration}
                </span>
              </div>

              <div className="mission-card">
                <div className={`mission-badge mission-badge--${mission.statusType}`}>
                  ? {mission.status}
                </div>
                <div className="mission-code">{mission.code}</div>
                <h3 className="mission-title">{mission.name}</h3>
                <p className="mission-details">{mission.details}</p>
                <div className="mission-telemetry-grid">
                  <div>
                    <span>{t.missions.apogeeLabel}</span>
                    <span>{mission.telemetry.apogee} / {mission.telemetry.perigee}</span>
                  </div>
                  <div>
                    <span>{t.missions.inclinationLabel}</span>
                    <span>{mission.telemetry.inclination}</span>
                  </div>
                  <div>
                    <span>{t.missions.payloadLabel}</span>
                    <span>{mission.payload}</span>
                  </div>
                  <div>
                    <span>{t.missions.successLabel}</span>
                    <span>{mission.telemetry.successRate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
