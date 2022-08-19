import { redirect } from '@remix-run/node';

export const loader = async () => {
  return redirect(
    `${process.env.AUTHING_SSO_URL}/logout?redirectUri=${encodeURIComponent(
      process.env.HOMEPAGE || 'https://willin.wang'
    )}`
  );
};
