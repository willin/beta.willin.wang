import { redirect, type LoaderFunction } from '@remix-run/node';
import { code2Token, LoginUrl } from '~/lib/auth.server';
import { commitSession, getSession } from '~/services/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  if (code === null) {
    return redirect('/login');
  }

  const oidcToken = await code2Token(code);
  if (oidcToken.error) {
    console.error(oidcToken);
    return redirect(LoginUrl);
  }

  const session = await getSession(request.headers.get('Cookie'));
  session.set('oidc', oidcToken);
  return redirect('/', {
    headers: { 'Set-Cookie': await commitSession(session) }
  });
};
