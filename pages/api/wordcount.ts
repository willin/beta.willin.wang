// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import readingTime from 'reading-time';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDirectusClient } from '@/models/directus';

type Data = {
  status: number;
};

type Payload = {
  event: 'items.create' | 'items.update';
  key: number | string;
  keys: Array<number | string>;
  payload: Record<string, unknown>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const token = req.headers['x-api-token'];
  if (token !== process.env.X_API_TOKEN) {
    return res.status(401).json({ status: 0 });
  }
  const payload: Payload = req.body;
  const { event, key, keys } = payload;
  const id = event === 'items.create' ? key : keys?.[0];
  if (!payload?.payload?.body) {
    // avoid infinite loop
    return res.status(201).json({ status: 0 });
  }

  const directus = await getDirectusClient();
  const content = await directus.items('contents').readOne(id);
  const { words, minutes } = readingTime(content?.body!);
  await directus.items('contents').updateOne(id, {
    wordcount: words,
    readtime: minutes
  });
  res.status(200).json({ status: 1 });
}
