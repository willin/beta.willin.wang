import '../../styles/globals.css';
import '@code-hike/mdx/dist/index.css';
import { Bootstrap } from './bootstrap';
import { I18nClientProvider } from './providers';
import { fallbackLng, supportedLanguages } from '@/i18n';
import { MainDrawer } from './header-drawer';
import { BackgroundImage } from './background';

export const revalidate = 600;

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale = 'zh-CN' } = params || {};
  const lang = supportedLanguages.includes(locale) ? locale : fallbackLng;

  return (
    <I18nClientProvider locale={lang}>
      <html lang={lang}>
        <head />
        <body>
          <BackgroundImage />
          <MainDrawer locale={lang}>{children}</MainDrawer>
          <Bootstrap />
        </body>
      </html>
    </I18nClientProvider>
  );
}
