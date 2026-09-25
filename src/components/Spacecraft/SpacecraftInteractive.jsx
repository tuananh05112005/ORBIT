import React, { useState, useRef } from 'react';
import SectionLabel from '../ui/SectionLabel/SectionLabel';
import SpacecraftCanvas from './SpacecraftCanvas';
import { RotateCcw, ZoomIn, ZoomOut, Move, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SpacecraftInteractive() {
  const [activeId, setActiveId] = useState('01');
  const controlsRef = useRef(null);
  const { t } = useLanguage();

  const hotspots = t.spacecraft.hotspots;
  const activeSubsystem = hotspots.find((h) => h.id === activeId) || hotspots[0];

  return (
    <section id="spacecraft" className="spacecraft-section">
      <div className="container">
        <div className="section-header">
          <SectionLabel number="02" text={t.spacecraft.sectionLabel} />
          <h2 className="section-title">{t.spacecraft.sectionTitle}</h2>
          <p className="section-desc">{t.spacecraft.sectionDesc}</p>
        </div>

        <div className="spacecraft-grid">
          <div className="spacecraft-info">
            <div className="spacecraft-hotspot-nav" role="tablist" aria-label="Spacecraft Subsystems">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  className={`spacecraft-hotspot-btn ${activeId === h.id ? 'spacecraft-hotspot-btn--active' : ''}`}
                  onClick={() => setActiveId(h.id)}
                  role="tab"
                  aria-selected={activeId === h.id}
                >
                  <span>{h.id}</span>
                  <span>{h.title}</span>
                </button>
              ))}
            </div>

            <div className="spacecraft-panel">
              <div className="spacecraft-panel__subsystem">
                <Eye size={15} />
                <span>SUBSYSTEM // {activeSubsystem.id}</span>
              </div>
              <h3 className="spacecraft-panel__title">{activeSubsystem.title}</h3>
              <div className="tech-card__subtitle">{activeSubsystem.subtitle}</div>
              <p className="spacecraft-panel__desc">{activeSubsystem.description}</p>
              <div className="spacecraft-panel__specs">
                {Object.entries(activeSubsystem.specs).map(([key, val]) => (
                  <div key={key} className="spacecraft-panel__spec-row">
                    <span className="tech-card__spec-label">{key}</span>
                    <span className="tech-card__spec-val">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="spacecraft-viewport-wrap" data-cursor="DRAG">
            <div className="spacecraft-viewport-hint">
              <Move size={14} />
              <span>{t.spacecraft.controlsHint}</span>
            </div>
            <SpacecraftCanvas activeHotspot={activeId} controlsRef={controlsRef} />
            <div className="spacecraft-viewport-controls">
              <button className="spacecraft-control-btn" onClick={() => controlsRef.current?.zoomIn()} aria-label="Zoom In">
                <ZoomIn size={14} /><span>{t.spacecraft.zoomIn}</span>
              </button>
              <button className="spacecraft-control-btn" onClick={() => controlsRef.current?.zoomOut()} aria-label="Zoom Out">
                <ZoomOut size={14} /><span>{t.spacecraft.zoomOut}</span>
              </button>
              <button className="spacecraft-control-btn" onClick={() => controlsRef.current?.reset()} aria-label="Reset Camera">
                <RotateCcw size={14} /><span>{t.spacecraft.reset}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
