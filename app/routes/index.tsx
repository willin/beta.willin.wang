import { pick } from 'accept-language-parser';
import {
  type ActionFunction,
  type LoaderFunction,
  redirect
} from '@remix-run/node';
import { i18n } from '~/i18n';

export const action: ActionFunction = ({ request }) => {
  const locale =
    pick(i18n.supportedLanguages, request.headers.get('Accept-Language')) ||
    i18n.fallbackLng;
  return redirect(`/${locale}`);
};

export const loader: LoaderFunction = ({ request }) => {
  const locale =
    pick(i18n.supportedLanguages, request.headers.get('Accept-Language')) ||
    i18n.fallbackLng;
  return redirect(`/${locale}`);
};
