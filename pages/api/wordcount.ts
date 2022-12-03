// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body);
  console.log(req.headers);
  res.status(200).json({ name: 'John Doe' });
}
// {
//   event: 'items.create',
//   accountability: {
//     user: '9f1a1a7d-e9c8-479e-9a0c-86ddf5d753fb',
//     role: '366e650d-8b41-4f9b-85b0-54e55cf218c2'
//   },
//   payload: { body: '1' },
//   key: 5,
//   collection: 'content'
// }
// {
//   event: 'items.update',
//   accountability: {
//     user: '9f1a1a7d-e9c8-479e-9a0c-86ddf5d753fb',
//     role: '366e650d-8b41-4f9b-85b0-54e55cf218c2'
//   },
//   payload: { body: '2' },
//   keys: [ '5' ],
//   collection: 'content'
// }
