import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({
  text,
  tag: Tag = 'h2',
  className = '',
  split = 'words', // 'words' or 'lines'
  delay = 0,
  stagger = 0.08
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll('.anim-unit');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 35,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: stagger,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, delay, stagger]);

  const units = text.split(split === 'lines' ? '\n' : ' ');

  return (
    <Tag ref={containerRef} className={`animated-text-wrap ${className}`}>
      {units.map((unit, idx) => (
        <span key={idx} className="anim-unit-wrapper" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <span className="anim-unit" style={{ display: 'inline-block' }}>
            {unit}&nbsp;
          </span>
        </span>
      ))}
    </Tag>
  );
}
