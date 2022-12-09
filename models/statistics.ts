import { getDirectusClient } from './directus';

export type KV = {
  name: string;
  value: string | number | KV | KV[];
};

export type Statistics = {
  online: boolean;
  coding: boolean;
  online_updated: string;
  date_updated: string;
  github: number;
  npm: number;
  wakatime: KV[];
  programming: KV[];
  contribution: KV[];
};

export async function getStats() {
  const directus = await getDirectusClient();
  const stats = await directus.singleton('statistics').read();
  return stats;
}
