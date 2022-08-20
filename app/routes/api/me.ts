import { json, type LoaderFunction } from '@remix-run/node';
import { getSession } from '~/services/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  if (!session.has('user')) {
    return json({ status: 0 });
  }
  const user = session.get('user');

  return json({ status: 1, user });
};
