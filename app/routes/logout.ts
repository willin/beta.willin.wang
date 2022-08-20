import { type LoaderFunction, redirect } from '@remix-run/node';
import { LogoutUrl } from '~/lib/auth.server';
import { getSession, destroySession } from '~/services/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.search) {
    return redirect(LogoutUrl);
  }
  const session = await getSession(request.headers.get('Cookie'));
  return redirect(`${url.pathname}?redirect=true`, {
    headers: {
      'Set-Cookie': await destroySession(session)
    }
  });
};
