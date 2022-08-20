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

  const resInfo = await fetch(
    `${process.env.AUTHING_APP_DOMAIN}/oidc/me?access_token=${oidcToken.access_token}`
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const user = await resInfo.json();
  const session = await getSession(request.headers.get('Cookie'));
  session.set('oidc', oidcToken);
  session.set('user', user);

  return redirect('/', {
    headers: { 'Set-Cookie': await commitSession(session) }
  });
};
