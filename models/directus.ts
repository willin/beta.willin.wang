import { Directus } from '@directus/sdk';
import { Contents } from './contents';
import { Interactions } from './interactions';
import { Statistics } from './statistics';
import { Tags } from './tags';

type DataTypes = {
  contents: Contents;
  interactions: Interactions;
  tags: Tags;
  statistics: Statistics;
};

const directus = new Directus<DataTypes>(process.env.DIRECTUS_URL || '');

export async function getDirectusClient() {
  await directus.auth.static(process.env.DIRECTUS_TOKEN || '');
  return directus;
}
