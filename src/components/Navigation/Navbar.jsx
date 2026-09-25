import React, { useState, useEffect } from 'react';
import '../../styles/navigation.css';
import Button from '../ui/Button/Button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = ['hero', 'technology', 'spacecraft', 'missions', 'earth', 'about'];
      const scrollPos = window.scrollY + 250;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.technology, href: '#technology', id: 'technology', num: '01' },
    { label: t.nav.spacecraft, href: '#spacecraft', id: 'spacecraft', num: '02' },
    { label: t.nav.missions, href: '#missions', id: 'missions', num: '03' },
    { label: t.nav.earth, href: '#earth', id: 'earth', num: '04' },
    { label: t.nav.about, href: '#about', id: 'about', num: '05' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`orbit-nav ${isScrolled ? 'orbit-nav--scrolled' : ''}`}>
        <div className="container orbit-nav__inner">
          <a href="#hero" className="orbit-nav__brand" onClick={(e) => handleNavClick(e, '#hero')}>
            <svg className="orbit-nav__logo-icon" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="42" stroke="#00E5FF" strokeWidth="6" />
              <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#ffffff" strokeWidth="3" transform="rotate(-28 50 50)" />
              <circle cx="50" cy="50" r="12" fill="#00E5FF" />
            </svg>
            <div>
              <span>ORBIT</span>
              <span className="orbit-nav__brand-sub">{t.nav.brandSub}</span>
            </div>
          </a>

          <nav aria-label="Main Navigation">
            <ul className="orbit-nav__links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`orbit-nav__link ${activeSection === item.id ? 'orbit-nav__link--active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="orbit-nav__actions">
            {/* Language Switcher */}
            <div className="orbit-lang-toggle" role="group" aria-label="Language selection">
              <button
                className={`orbit-lang-btn ${language === 'VI' ? 'orbit-lang-btn--active' : ''}`}
                onClick={() => setLanguage('VI')}
                aria-pressed={language === 'VI'}
                aria-label="Ti?ng Vi?t"
              >
                VI
              </button>
              <button
                className={`orbit-lang-btn ${language === 'EN' ? 'orbit-lang-btn--active' : ''}`}
                onClick={() => setLanguage('EN')}
                aria-pressed={language === 'EN'}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <Button variant="secondary" size="sm" onClick={onOpenContact}>
              {t.nav.contact}
            </Button>

            <button
              className="orbit-nav__mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`orbit-mobile-menu ${mobileMenuOpen ? 'orbit-mobile-menu--open' : ''}`}>
        <ul className="orbit-mobile-menu__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="orbit-mobile-menu__link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.label}</span>
                <span className="orbit-mobile-menu__num">{item.num}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="orbit-mobile-menu__footer">
          {/* Mobile Language Toggle */}
          <div className="orbit-mobile-lang">
            <span>{language === 'VI' ? 'NGÔN NG?' : 'LANGUAGE'}</span>
            <div className="orbit-lang-toggle">
              <button
                className={`orbit-lang-btn ${language === 'VI' ? 'orbit-lang-btn--active' : ''}`}
                onClick={() => setLanguage('VI')}
              >
                VI
              </button>
              <button
                className={`orbit-lang-btn ${language === 'EN' ? 'orbit-lang-btn--active' : ''}`}
                onClick={() => setLanguage('EN')}
              >
                EN
              </button>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
          >
            {t.nav.contactMobile}
          </Button>
          <div className="orbit-mobile-menu__telemetry">
            {t.nav.systemStatus}
          </div>
        </div>
      </div>
    </>
  );
}
