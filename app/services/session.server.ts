import { createCookieSessionStorage } from '@remix-run/node';

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.COOKIE_SECRET || 's3cr3t'],
    secure: process.env.NODE_ENV === 'production'
  }
});

export const { getSession, commitSession, destroySession } = sessionStorage;
