import React from 'react';
import './Button.css';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = true,
  external = false,
  href,
  onClick,
  className = '',
  ariaLabel,
  ...props
}) {
  const Tag = href ? 'a' : 'button';
  const IconComponent = external ? ArrowUpRight : ArrowRight;

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`orbit-btn orbit-btn--${variant} orbit-btn--${size} ${className}`}
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'button')}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      <span className="orbit-btn__glow-track"></span>
      <span className="orbit-btn__label">{children}</span>
      {icon && (
        <span className="orbit-btn__icon">
          <IconComponent size={14} strokeWidth={2} />
        </span>
      )}
    </Tag>
  );
}
