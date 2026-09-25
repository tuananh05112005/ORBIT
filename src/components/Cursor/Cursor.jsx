import React, { useEffect, useState, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });

      // Check targets
      const target = e.target;
      const interactiveEl = target.closest('button, a, [data-cursor], .orbit-hotspot, input, [role="button"]');

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else if (interactiveEl.closest('.spacecraft-canvas-wrap') || interactiveEl.closest('.earth-canvas-wrap')) {
          setCursorText('DRAG');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth RAF for trailing ring
    let animationFrame;
    const render = () => {
      ringPos.current.x += (pos.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }

      animationFrame = requestAnimationFrame(render);
    };
    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrame);
    };
  }, [pos.x, pos.y]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isVisible ? 'custom-cursor--visible' : ''} ${isHovered ? 'custom-cursor-dot--hover' : ''}`}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isVisible ? 'custom-cursor--visible' : ''} ${isHovered ? 'custom-cursor-ring--hover' : ''} ${cursorText ? 'custom-cursor-ring--text' : ''}`}
      >
        {cursorText && <span className="custom-cursor-text">{cursorText}</span>}
      </div>
    </>
  );
}
