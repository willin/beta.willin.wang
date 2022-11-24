// import i18n from 'i18next';

export const languages = {
  'zh-CN': { name: '简体中文', flag: '🇨🇳' },
  'zh-TW': { name: '繁體中文', flag: '🇭🇰' },
  'en-US': { name: 'English', flag: '🇺🇸' },
  'ko-KR': { name: '한국어', flag: '🇰🇷' },
  'ja-JP': { name: '日本語', flag: '🇯🇵' }
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
