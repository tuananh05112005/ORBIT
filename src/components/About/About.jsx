import React from 'react';
import SectionLabel from '../ui/SectionLabel/SectionLabel';
import Stat from '../ui/Stat/Stat';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionLabel number="06" text={t.about.sectionLabel} />
            <h2 className="section-title">{t.about.sectionTitle}</h2>
            <p className="about-manifesto">{t.about.manifesto}</p>
            <p className="about-body">{t.about.body}</p>
          </div>
          <div className="about-stats-grid">
            {t.about.stats.map((item, idx) => (
              <Stat
                key={idx}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                desc={item.detail}
                precision={0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
