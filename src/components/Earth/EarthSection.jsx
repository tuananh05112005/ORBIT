import React from 'react';
import SectionLabel from '../ui/SectionLabel/SectionLabel';
import Stat from '../ui/Stat/Stat';
import EarthGlobe from './EarthGlobe';
import { useLanguage } from '../../context/LanguageContext';

export default function EarthSection() {
  const { t } = useLanguage();

  return (
    <section id="earth" className="earth-section">
      <div className="container">
        <div className="section-header">
          <SectionLabel number="04" text={t.earth.sectionLabel} />
          <h2 className="section-title">{t.earth.sectionTitle}</h2>
          <p className="section-desc">{t.earth.sectionDesc}</p>
        </div>
        <div className="earth-grid">
          <div className="earth-canvas-wrap" data-cursor="DRAG">
            <EarthGlobe />
          </div>
          <div className="earth-stats-col">
            {t.earth.stats.map((stat, idx) => (
              <Stat
                key={idx}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                unit={stat.unit}
                label={stat.label}
                desc={stat.desc}
                precision={stat.value % 1 === 0 ? 0 : 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
