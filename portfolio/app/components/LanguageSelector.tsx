'use client';

import { useLanguage } from './LanguageProvider';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
      aria-label="Toggle language"
    >
      <span className="text-zinc-950 dark:text-zinc-50">
        {language.toUpperCase()}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-zinc-600 dark:text-zinc-400"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    </button>
  );
}
