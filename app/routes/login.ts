import { type LoaderFunction, redirect } from '@remix-run/node';
import { LoginUrl } from '~/lib/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  return redirect(LoginUrl(url.searchParams.get('redirect')));
};
