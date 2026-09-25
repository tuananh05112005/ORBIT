import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { vi } from '../locales/vi';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('orbit_lang');
      if (saved === 'EN' || saved === 'VI') return saved;
    } catch {
      // ignore
    }
    return 'VI'; // Default to VI as requested
  });

  const setLanguage = (lang) => {
    if (lang !== 'EN' && lang !== 'VI') return;
    setLanguageState(lang);
    try {
      localStorage.setItem('orbit_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'VI' ? 'EN' : 'VI');
  };

  const t = language === 'VI' ? vi : en;

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isVietnamese: language === 'VI',
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
