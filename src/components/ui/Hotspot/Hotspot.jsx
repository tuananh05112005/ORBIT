import React from 'react';
import './Hotspot.css';

export default function Hotspot({
  id,
  title,
  isActive,
  onClick,
  coords = { x: 50, y: 50 }
}) {
  return (
    <button
      className={`orbit-hotspot ${isActive ? 'orbit-hotspot--active' : ''}`}
      style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
      onClick={onClick}
      aria-label={`Hotspot ${id}: ${title}`}
      type="button"
    >
      <span className="orbit-hotspot__ping"></span>
      <span className="orbit-hotspot__core">
        <span className="orbit-hotspot__num">{id}</span>
      </span>
      <span className="orbit-hotspot__label">{title}</span>
    </button>
  );
}
