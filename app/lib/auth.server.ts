export type OidcResponse = {
  error?: string;
  error_description?: string;

  access_token: string;
  expires_in: number;
  id_token: string;
  scope: string;
  token_type: string;
  refresh_token: string;
};

const rnd = (seed) => ((seed * 9301 + 49297) % 233280) / 233280.0;
const rand = (number) =>
  Math.floor(rnd(new Date().getTime() * Math.random()) * number);

export function randStr(len = 20, x = 'abcdefhijkmnprstwxyz2345678') {
  const maxPos = x.length;
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += x.charAt(rand(maxPos));
  }
  return pwd;
}

export const LoginUrl = (redirectUri: string) => {
  const params = new URLSearchParams({
    client_id: process.env.AUTHING_APP_ID,
    state: redirectUri || randStr(),
    scope:
      'openid username email phone profile offline_access roles unionid external_id extended_fields',
    redirect_uri: process.env.AUTHING_APP_CALLBACK,
    response_type: 'code'
  });
  return `${process.env.AUTHING_SSO_URL}/oidc/auth?${params.toString()}`;
};

export const LogoutUrl = `${
  process.env.AUTHING_SSO_URL
}/logout?redirectUri=${encodeURIComponent(
  process.env.HOMEPAGE || 'https://willin.wang'
)}`;

async function tokenRequest(body) {
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
  return oidcToken;
}

export function code2Token(code: string) {
  const body = {
    client_id: process.env.AUTHING_APP_ID,
    client_secret: process.env.AUTHING_APP_SECRET,
    grant_type: 'authorization_code',
    code
  };

  return tokenRequest(body);
}

export function refreshToken(token: OidcResponse) {
  const body = {
    client_id: process.env.AUTHING_APP_ID,
    client_secret: process.env.AUTHING_APP_SECRET,
    grant_type: 'refresh_token',
    refresh_token: token.refresh_token
  };

  return tokenRequest(body);
}
