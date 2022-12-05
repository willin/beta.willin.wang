import '../../styles/globals.css';
import clsx from 'classnames';
import { Bootstrap } from './bootstrap';
// import { darkThemes } from './themes';
import { I18nClientProvider } from './providers';
import { fallbackLng, supportedLanguages } from '@/i18n';
import { MainDrawer } from './header-drawer';

export const revalidate = 600;

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale = 'zh-CN' } = params || {};
  const lang = supportedLanguages.includes(locale) ? locale : fallbackLng;

  return (
    <I18nClientProvider locale={lang}>
      <html lang={lang}>
        <head />
        <body>
          <div
            id='background'
            className={clsx({
              dark: true //darkThemes.map((x) => x.toLowerCase()).includes(theme)
            })}></div>
          <MainDrawer locale={locale}>
            <main className='pt-20' style={{ minHeight: 'calc(100vh - 75px)' }}>
              {children}
            </main>
          </MainDrawer>
          <Bootstrap />
        </body>
      </html>
    </I18nClientProvider>
  );
}
