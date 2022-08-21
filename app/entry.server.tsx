import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import { I18nProvider } from 'remix-i18n';
import { i18n, getLocale } from './i18n';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const locale = getLocale(new URL(request.url).pathname);
  i18n.locale(locale);

  const markup = renderToString(
    <I18nProvider i18n={i18n}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nProvider>
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${  markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
