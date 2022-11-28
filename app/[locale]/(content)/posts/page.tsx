import { headers } from 'next/headers';

export default async function PostPage1() {
  const headersList = headers();
  const referer = headersList.get('referer');
  const ua = headersList.get('user-agent');
  const country = headersList.get('x-vercel-ip-country');
  const region = headersList.get('x-vercel-ip-country-region');

  return (
    <div>
      <h1>Hello</h1>
      <div>Referer: {referer}</div>
      <div>UA: {ua}</div>
      <div>Country: {country}</div>
      <div>Region: {region}</div>
      <pre>{JSON.stringify(headersList.entries(), null, 2)}</pre>
    </div>
  );
}
