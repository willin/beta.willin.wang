import { NextResponse, type NextRequest } from 'next/server';
import { supportedLanguages, fallbackLng } from './i18n';

export function middleware(request: NextRequest) {
  const locales = supportedLanguages;
  const defaultLang = fallbackLng;
  const { headers, nextUrl } = request;

  // Exclude statics - add your static folders
  const shouldCheckLocale = !nextUrl.pathname.startsWith('/_next') && !nextUrl.pathname.includes('index') && !nextUrl.pathname.includes('.');

  const reqLocale = nextUrl.pathname.split('/')[1];
  const noValidLocale = !locales.includes(reqLocale);

  if (shouldCheckLocale && noValidLocale) {
    // TODO: check from cookie before detecting

    const accepts = headers.get('accept-language') || '';
    // Omit country for now
    const detected = accepts.split(',')[0].split('-')[0];

    const validLocale = locales.includes(detected) ? detected : defaultLang;

    return NextResponse.rewrite(new URL(`/${validLocale}${nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|images|favicon).*)']
};
