import React, { useEffect, useState } from 'react';
import './Loading.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Loading({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const statuses = t.loading.statuses;
    setStatusText(statuses[0].text);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setStatusText(statuses[statuses.length - 1].text);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => { if (onLoaded) onLoaded(); }, 600);
        }, 300);
      } else {
        setProgress(current);
        const match = statuses.filter(s => s.at <= current).pop();
        if (match) setStatusText(match.text);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onLoaded, t]);

  return (
    <div className={`orbit-loading-screen ${isFinished ? 'orbit-loading-screen--exit' : ''}`} aria-hidden={isFinished}>
      <div className="orbit-loading__content">
        <div className="orbit-loading__brand">
          <span className="orbit-loading__logo-icon">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="44" stroke="#00E5FF" strokeWidth="3" strokeDasharray="6 4" />
              <circle cx="50" cy="50" r="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="8" fill="#00E5FF" />
              <line x1="50" y1="2" x2="50" y2="18" stroke="#00E5FF" strokeWidth="2" />
              <line x1="50" y1="82" x2="50" y2="98" stroke="#00E5FF" strokeWidth="2" />
            </svg>
          </span>
          <h1 className="orbit-loading__title">{t.loading.title}</h1>
        </div>

        <div className="orbit-loading__progress-container">
          <div className="orbit-loading__bar">
            <div className="orbit-loading__fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="orbit-loading__meta">
            <span className="orbit-loading__status">{statusText}</span>
            <span className="orbit-loading__pct">
              {progress < 10 ? `0${progress}` : progress}%
            </span>
          </div>
        </div>

        <div className="orbit-loading__footer-label">{t.loading.footer}</div>
      </div>
    </div>
  );
}
