import { json, type LoaderFunction } from '@remix-run/node';
import { getSession } from '~/services/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  if (!session.has('user')) {
    return json({ status: 0 });
  }
  const oidcToken = session.get('oidc');
  const resInfo = await fetch(
    `${process.env.AUTHING_APP_DOMAIN}/oidc/me?access_token=${oidcToken.access_token}`
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const user = await resInfo.json();

  return json(
    { status: 1, user },
    {
      headers: {
        'Cache-Control': 'max-age=604800, stale-while-revalidate=86400'
      }
    }
  );
};
