import { json, type LinksFunction, type LoaderFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import tailwindStyles from '~/styles/global.css';
import { ThemeProvider } from './components/atom/use-theme';
import { getSession } from './services/session.server';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' }
];

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const theme = (session.get('theme') as string) || 'retro';
  return json({ theme });
};

export type RootLoaderData = {
  theme: string;
};

export default function App() {
  const { theme } = useLoaderData<RootLoaderData>();
  return (
    <ThemeProvider specifiedTheme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}
