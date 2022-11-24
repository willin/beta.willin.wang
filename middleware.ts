import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import i18n from './i18n';

export function middleware(request: NextRequest) {
  const locales = i18n.options.supportedLngs as string[];
  const defaultLang = (i18n.options.fallbackLng as string[])[0];
  const { headers, nextUrl } = request;

  // Exclude statics - add your static folders
  const shouldCheckLocale =
    !nextUrl.pathname.startsWith('/_next') &&
    !nextUrl.pathname.startsWith('/favicon') &&
    !nextUrl.pathname.startsWith('/images') &&
    !nextUrl.pathname.endsWith('.cur');

  const reqLocale = nextUrl.pathname.split('/')[1];
  const noValidLocale = !locales.includes(reqLocale);

  if (shouldCheckLocale && noValidLocale) {
    // TODO: check from cookie before detecting

    const accepts = headers.get('accept-language') || '';
    // Omit country for now
    const detected = accepts.split(',')[0].split('-')[0];

    const validLocale = locales.includes(detected) ? detected : defaultLang;

    nextUrl.pathname = `${nextUrl.pathname}`;

    return NextResponse.rewrite(new URL(`/${validLocale}${nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*']
};
