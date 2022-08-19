import { json, redirect } from '@remix-run/node';

export type OidcResponse = {
  error?: string;
  error_description?: string;

  access_token: string;
  expires_in: number;
  id_token: string;
  scope: string;
  token_type: string;
};

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  if (code === null) {
    return redirect('/login');
  }

  const body = {
    client_id: process.env.AUTHING_APP_ID,
    client_secret: process.env.AUTHING_APP_SECRET,
    grant_type: 'authorization_code',
    code
  };

  const formBody = [];
  // eslint-disable-next-line
  for (const property in body) {
    const encodedKey = encodeURIComponent(property);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const encodedValue = encodeURIComponent(body[property]);
    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  const res = await fetch(`${process.env.AUTHING_APP_DOMAIN}/oidc/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody.join('&')
  });

  const oidcToken = (await res.json()) as OidcResponse;
  if (oidcToken.error) {
    console.error(oidcToken);
    return redirect('/login');
  }

  const resInfo = await fetch(
    `${process.env.AUTHING_APP_DOMAIN}/oidc/me?access_token=${oidcToken.access_token}`
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const user = await resInfo.json();
  return json(user);
};
