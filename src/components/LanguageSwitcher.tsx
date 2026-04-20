'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'bg' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-carbon-800 hover:bg-carbon-700 transition-colors group"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-carbon-300 group-hover:text-racing-500 transition-colors" />
      <div className="flex items-center space-x-1">
        <motion.span
          key={currentLang}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-sans font-bold text-white uppercase"
        >
          {currentLang}
        </motion.span>
        <span className="text-xs text-carbon-400">/</span>
        <span className="text-xs text-carbon-400 uppercase">
          {currentLang === 'en' ? 'bg' : 'en'}
        </span>
      </div>
    </button>
  );
}
