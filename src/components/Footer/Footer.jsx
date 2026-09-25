import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer({ onOpenContact }) {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.technology, href: '#technology' },
    { label: t.nav.spacecraft, href: '#spacecraft' },
    { label: t.nav.missions, href: '#missions' },
    { label: t.nav.earth, href: '#earth' },
    { label: t.nav.about, href: '#about' }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X (Twitter)', href: 'https://x.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'GitHub Space', href: 'https://github.com' }
  ];

  return (
    <footer className="orbit-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">ORBIT</div>
            <div className="footer-tagline">{t.footer.tagline}</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', maxWidth: '280px', marginTop: '0.5rem', lineHeight: '1.6' }}>
              {t.footer.desc}
            </p>
          </div>

          <div>
            <div className="footer-col-title">{t.footer.navTitle}</div>
            <ul className="footer-links">
              {navLinks.map((link, idx) => (
                <li key={idx}><a href={link.href} className="footer-link">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">{t.footer.commsTitle}</div>
            <ul className="footer-links">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">{t.footer.missionControlTitle}</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
              {t.footer.address}
            </p>
            <button
              onClick={onOpenContact}
              className="footer-link"
              style={{ color: 'var(--color-accent)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.12em' }}
            >
              {t.footer.downlinkBtn}
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-status-pill">
            <span className="footer-status-dot"></span>
            <span>{t.footer.statusNominal}</span>
          </div>
          <div>
            <span>{t.footer.groundRelay}</span>
            <span style={{ margin: '0 1rem' }}>|</span>
            <span>{t.footer.encryption}</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="footer-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            aria-label="Scroll to top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
