import { getDirectusClient } from './directus';

export type Statistics = {
  online: boolean;
  coding: boolean;
  online_updated: string;
  date_updated: string;
  github: number;
  npm: number;
  wakatime: Record<string, unknown>[];
  programming: Record<string, unknown>[];
  contribution: Record<string, unknown>[];
};

export async function getStats() {
  const directus = await getDirectusClient();
  const stats = await directus.singleton('statistics').read();
  return stats;
}
