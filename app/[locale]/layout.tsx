import '../../styles/globals.css';
import clsx from 'classnames';
import { Bootstrap } from './bootstrap';
// import { darkThemes } from './themes';
import { Providers } from './providers';

export const revalidate = 600;
export const runtime = 'experimental-edge';

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale = 'zh-CN' } = params || {};

  return (
    <Providers locale={locale}>
      <html lang={locale}>
        <head />
        <body>
          <div
            id='background'
            className={clsx({
              dark: true //darkThemes.map((x) => x.toLowerCase()).includes(theme)
            })}></div>
          {/* <Header /> */}
          <div className='pt-20' style={{ minHeight: 'calc(100vh - 75px)' }}>
            {children}
          </div>
          <Bootstrap />
        </body>
      </html>
    </Providers>
  );
}
