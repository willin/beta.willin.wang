import { Directus } from '@directus/sdk';
import { Contents } from './contents';

type DataTypes = {
  contents: Contents;
};

const directus = new Directus<DataTypes>(process.env.DIRECTUS_URL || '');

export async function getDirectusClient() {
  await directus.auth.static(process.env.DIRECTUS_TOKEN || '');
  return directus;
}
