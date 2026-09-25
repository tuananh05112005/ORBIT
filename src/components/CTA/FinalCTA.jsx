import React, { useRef, useEffect } from 'react';
import SectionLabel from '../ui/SectionLabel/SectionLabel';
import Button from '../ui/Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA({ onOpenContact }) {
  const ctaRef = useRef(null);
  const canvasRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.3 + 0.3,
      speed: Math.random() * 0.35 + 0.1,
      alpha: Math.random() * 0.7 + 0.2
    }));
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.y -= s.speed;
        if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }
        ctx.fillStyle = `rgba(0,229,255,${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationId); };
  }, []);

  return (
    <section className="final-cta-section" ref={ctaRef}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }} />
      <div className="final-cta-glow"></div>
      <div className="container">
        <div className="final-cta-content">
          <SectionLabel number="07" text={t.finalCta.sectionLabel} align="center" />
          <h2 className="final-cta-heading">
            {t.finalCta.headingLine1}<br />
            {t.finalCta.headingLine2}
          </h2>
          <p className="final-cta-sub">{t.finalCta.subtext}</p>
          <div className="final-cta-actions">
            <Button variant="primary" size="lg" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.finalCta.btnPrimary}
            </Button>
            <Button variant="secondary" size="lg" onClick={onOpenContact}>
              {t.finalCta.btnSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
