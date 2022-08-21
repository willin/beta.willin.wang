import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation
} from '@remix-run/react';
import { useEffect } from 'react';
import { useI18n } from 'remix-i18n';
import { getLocale } from '~/i18n';
import { useTheme } from './atom/use-theme';

export function Document({ children }) {
  const i18n = useI18n();
  const [theme] = useTheme();

  const location = useLocation();
  useEffect(() => {
    const locale = getLocale(location.pathname);
    if (locale !== i18n.locale()) {
      i18n.locale(locale);
    }
  }, [location]);

  return (
    <html lang={i18n.locale()} data-theme={theme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
