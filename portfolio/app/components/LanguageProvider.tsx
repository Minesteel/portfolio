'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import frTranslations from '@/app/locales/fr.json';
import enTranslations from '@/app/locales/en.json';

type Language = 'fr' | 'en';

type Translations = typeof frTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  fr: frTranslations,
  en: enTranslations,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize state with a function that reads from localStorage only on client
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
        return savedLanguage;
      }
    }
    return 'fr';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Update document lang on mount and when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      <div suppressHydrationWarning>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
