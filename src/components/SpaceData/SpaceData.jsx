import React, { useEffect, useRef } from 'react';
import SectionLabel from '../ui/SectionLabel/SectionLabel';
import { Activity, Radio, Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SpaceData() {
  const canvasRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let step = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const mid = height / 2;
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(width, mid);
      ctx.stroke();
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = '#00E5FF';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = mid + Math.sin(x / 40 + step) * 14 + Math.sin(x / 100 - step * 0.5) * 6;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
      step += 0.045;
      animationId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="spacedata-section">
      <div className="container">
        <div className="spacedata-container">
          <div className="spacedata-header">
            <div className="spacedata-title-wrap">
              <Compass size={20} style={{ color: 'var(--color-accent)' }} />
              <div>
                <SectionLabel number="05" text={t.spaceData.sectionLabel} />
                <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: 0 }}>
                  {t.spaceData.sectionTitle}
                </h3>
              </div>
            </div>
            <div className="spacedata-live-badge">
              <Radio size={14} />
              <span>{t.spaceData.liveBadge}</span>
            </div>
          </div>

          <div className="spacedata-grid">
            {t.spaceData.telemetry.map((item, idx) => (
              <div key={idx} className="spacedata-card">
                <span className="spacedata-card__label">{item.label}</span>
                <div className="spacedata-card__val-row">
                  <span className="spacedata-card__num">{item.value}</span>
                  <span className="spacedata-card__unit">{item.unit}</span>
                </div>
                <span className="spacedata-card__trend">{item.trend}</span>
              </div>
            ))}
          </div>

          <div className="spacedata-waveform">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Activity size={16} style={{ color: 'var(--color-accent)' }} />
              <span>{t.spaceData.waveformLabel}</span>
            </div>
            <canvas ref={canvasRef} width={260} height={40} style={{ display: 'block', maxWidth: '100%' }} />
            <span>{t.spaceData.orbitPass}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
