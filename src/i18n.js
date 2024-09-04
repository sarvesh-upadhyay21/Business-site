import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "government": "Government of India",
        "welcome": "Welcome to our site"
        // Add more English translations here
      }
    },
    hi: {
      translation: {
        "government": "भारत सरकार",
        "welcome": "हमारी साइट पर आपका स्वागत है"
        // Add more Hindi translations here
      }
    },
    mr: {
      translation: {
        "government": "भारत सरकार",
        "welcome": "आमच्या साइटवर आपले स्वागत आहे"
        // Add more Marathi translations here
      }
    }
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
