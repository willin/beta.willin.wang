import { redirect } from '@remix-run/node';

export const loader = async () => {
  return redirect(
    `${process.env.AUTHING_SSO_URL}/login?app_id=${process.env.AUTHING_APP_ID}`
  );
};
