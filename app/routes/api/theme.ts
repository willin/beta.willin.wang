import {
  type LoaderFunction,
  redirect,
  type ActionFunction,
  json
} from '@remix-run/node';
import { themes } from '~/components/atom/use-theme';
import { commitSession, getSession } from '~/services/session.server';

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case 'PUT':
    case 'POST': {
      const session = await getSession(request.headers.get('Cookie'));
      const data: { theme: string } = await request.json();
      const theme = themes.map((x) => x.id).includes(data.theme)
        ? data.theme
        : 'retro';
      session.set('theme', theme);
      return json(
        { success: true },
        {
          headers: {
            'Set-Cookie': await commitSession(session)
          }
        }
      );
    }
    default: {
      return json(
        {
          success: false
        },
        {
          status: 403
        }
      );
    }
  }
};

export const loader: LoaderFunction = () => {
  throw redirect('/');
};
