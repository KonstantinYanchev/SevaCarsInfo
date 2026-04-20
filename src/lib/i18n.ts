import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18next with react-i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: require('../../public/locales/en/common.json'),
      },
      bg: {
        common: require('../../public/locales/bg/common.json'),
      },
    },
    lng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'bg' : 'bg', // Bulgarian as default
    fallbackLng: 'bg',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable suspense for SSR compatibility
    },
  });

// Save language preference to localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
