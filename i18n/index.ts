// import i18n from 'i18next';

// https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f3.svg
export const languages = {
  'zh-CN': { name: '简体中文', flag: '🇨🇳', unicode: '1f1e8-1f1f3' },
  'zh-TW': { name: '正體中文', flag: '🇹🇼', unicode: '1f1f9-1f1fc' },
  en: { name: 'English', flag: '🇺🇸', unicode: '1f1fa-1f1f8' },
  ko: { name: '한국어', flag: '🇰🇷', unicode: '1f1f0-1f1f7' },
  ja: { name: '日本語', flag: '🇯🇵', unicode: '1f1ef-1f1f5' }
};

const locales = Object.keys(languages);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
// i18n.init({
//   fallbackLng: 'zh-CN',
//   supportedLngs: locales,
//   fallbackNS: 'common',
//   ns: ['common'],
//   // backend: {
//   //   loadPath: './i18n/{{lng}}/{{ns}}.json'
//   // },
//   // debug: process.env.NODE_ENV === "development",
//   // To load sync
//   initImmediate: false
// });

// locales.forEach((locale) => {
//   i18n.addResources(locale, 'common', require(`./${locale}/common.json`));
// });

// export default i18n;

const i18n = {
  options: {
    fallbackLng: 'zh-CN',
    supportedLngs: locales,
    fallbackNS: 'common',
    ns: ['common'],
    // backend: {
    //   loadPath: './i18n/{{lng}}/{{ns}}.json'
    // },
    // debug: process.env.NODE_ENV === "development",
    // To load sync
    initImmediate: false
  }
};

export default i18n;

export function t(key: string) {
  return key;
}
