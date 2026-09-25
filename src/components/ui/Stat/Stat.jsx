import React, { useEffect, useRef, useState } from 'react';
import './Stat.css';

export default function Stat({
  value,
  prefix = '',
  suffix = '',
  unit = '',
  label,
  desc,
  precision = 1,
  className = ''
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const isFloat = typeof value === 'number' && !Number.isInteger(value);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const target = typeof value === 'number' ? value : parseFloat(value);
          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * ease;

            if (isFloat) {
              setDisplayValue(currentVal.toFixed(precision));
            } else {
              setDisplayValue(Math.round(currentVal));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(isFloat ? target.toFixed(precision) : target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, precision]);

  return (
    <div className={`orbit-stat ${className}`} ref={elementRef}>
      <div className="orbit-stat__value-row">
        {prefix && <span className="orbit-stat__prefix">{prefix}</span>}
        <span className="orbit-stat__num">{displayValue}</span>
        {suffix && <span className="orbit-stat__suffix">{suffix}</span>}
        {unit && <span className="orbit-stat__unit">{unit}</span>}
      </div>
      {label && <div className="orbit-stat__label">{label}</div>}
      {desc && <div className="orbit-stat__desc">{desc}</div>}
    </div>
  );
}
