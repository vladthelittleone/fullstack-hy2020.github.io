import i18n from 'i18next';

import en from './locales/en';
import fi from './locales/fi';
import zh from './locales/zh';

const resources = {
  en,
  fi,
  zh,
};

i18n.init({
  resources,
  fallbackLng: 'en',
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
});

export default i18n;
