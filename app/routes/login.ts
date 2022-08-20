import { type LoaderFunction, redirect } from '@remix-run/node';
import { LoginUrl } from '~/lib/auth.server';

export const loader: LoaderFunction = async () => {
  return redirect(LoginUrl);
};
