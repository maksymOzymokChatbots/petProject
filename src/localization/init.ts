import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import './yup';

/**
 * Setup localization
 */
const init = () => {
  const modules = {
    // app: require('@app/locale'),
    //auth: require('@auth/locale')
  };

  const resources = ['ua'].reduce(
    (result, locale) => ({
      ...result,
      [locale]: {
        common: require(`../locale/${locale}.json`)
      }
    }),
    {}
  );

  // Object.entries(modules).map(([name, module]) => {
  //   Object.entries(module.default).map(([locale, translations]) => {
  //     resources[locale].common[name] = translations;
  //   });
  // });

  return i18n.use(initReactI18next).init({
    resources,
    ns: ['common'],
    initImmediate: false,
    fallbackLng: 'ua',
    lng: 'ua',
    defaultNS: 'common',
    react: {
      bindI18n: 'languageChanged loaded added'
    },
    interpolation: {
      escapeValue: false
    }
  });
};

export { init };
