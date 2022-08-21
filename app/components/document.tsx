import clsx from 'classnames';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation
} from '@remix-run/react';
import React, { useEffect } from 'react';
import { useI18n } from 'remix-i18n';
import { getLocale } from '~/i18n';
import { datkThemes, useTheme } from '~/components/use-theme';
import { Header } from './header';
import { Footer } from './footer';

export function Document({ children }: { children: React.ReactNode }) {
  const i18n = useI18n();
  const [theme] = useTheme();

  const location = useLocation();
  useEffect(() => {
    const locale = getLocale(location.pathname);
    if (locale !== i18n.locale()) {
      i18n.locale(locale);
    }
  }, [location, i18n]);

  return (
    <html lang={i18n.locale()} data-theme={theme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div
          id='background'
          className={clsx({
            dark: datkThemes.includes(theme)
          })}></div>
        <Header />
        <div className='pt-20' style={{ minHeight: 'calc(100vh - 75px)' }}>
          {children}
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
