import { RemixBrowser } from '@remix-run/react';
import { hydrateRoot } from 'react-dom/client';
import { I18nProvider } from 'remix-i18n';
import { i18n, getLocale } from './i18n';

const locale = getLocale(window.location.pathname);
i18n.locale(locale);

hydrateRoot(
  document,
  <I18nProvider i18n={i18n}>
    <RemixBrowser />
  </I18nProvider>
);
