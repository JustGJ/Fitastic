import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, fr } from './translations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_LANGUAGE_KEY = 'settings.lang';

// Corrected Language Detector Plugin
const languageDetectorPlugin: any = {
  type: 'languageDetector', // Ensure type is 'languageDetector'
  async: true,
  init: () => {},
  detect: async (callback: (lang: string) => void) => {
    try {
      // Get stored language from AsyncStorage
      const language = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
      if (language) {
        // If language was stored before, use this language in the app
        callback(language);
      } else {
        // If language was not stored yet, use English
        callback('fr');
      }
    } catch (error) {
      console.log('Error reading language', error);
      // Fallback to English if there's an error
      callback('en');
    }
  },
  cacheUserLanguage: async (language: string) => {
    try {
      // Save a user's language choice in AsyncStorage
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {
      console.log('Error caching language', error);
    }
  },
};

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
