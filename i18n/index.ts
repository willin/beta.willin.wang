import { NextI18n } from './next-i18n';

export const languages = {
  'zh-CN': { name: '简体中文', flag: '🇨🇳', unicode: '1f1e8-1f1f3' },
  'zh-TW': { name: '正體中文', flag: '🇹🇼', unicode: '1f1f9-1f1fc' },
  en: { name: 'English', flag: '🇺🇸', unicode: '1f1fa-1f1f8' },
  ko: { name: '한국어', flag: '🇰🇷', unicode: '1f1f0-1f1f7' },
  ja: { name: '日本語', flag: '🇯🇵', unicode: '1f1ef-1f1f5' }
};

export const supportedLanguages = Object.keys(languages);
export const fallbackLng = 'zh-CN';

const i18n = new NextI18n({
  supportedLanguages,
  fallbackLng
});

supportedLanguages.forEach((locale) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  i18n.set(locale, require(`./${locale}/common.json`));
});

export default i18n;

export { i18n };
export { I18nProvider } from './provider';
export { useI18n } from './hook';
