import React from 'react';
import './SectionLabel.css';

export default function SectionLabel({ number, text, align = 'left' }) {
  return (
    <div className={`section-label section-label--${align}`}>
      <span className="section-label__pulse"></span>
      {number && <span className="section-label__num">{number}</span>}
      <span className="section-label__divider">//</span>
      <span className="section-label__text">{text}</span>
    </div>
  );
}
