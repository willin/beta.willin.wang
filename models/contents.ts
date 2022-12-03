// import { cache } from 'react';
// import { getDirectusClient } from './directus';

/* eslint-disable no-unused-vars */
export enum ContentType {
  POST = 'post',
  PAGE = 'page',
  SNIPPET = 'snippet'
}

export enum ContentStatus {
  PUBLISHED = 'published',
  DFRAFT = 'draft',
  ARCHIVED = 'archived'
}

export type Contents = {
  id: string;
  slug: string;
  title: string;
  price: number;
  type: ContentType;
  locale: string;
  status: ContentStatus;
  body: string;
  wordcouont: number;
  readtime: number;
  date_created: string;
  date_updated: string;
};

// export const getContentsStaticParams = cache(async (type: ContentType) => {
//   const directus = await getDirectusClient();

//   const { data } = await directus.items('contents').readByQuery({
//     status: ContentStatus.PUBLISHED,
//     type,
//     fields: ['slug', 'locale']
//   });
//   return data;
// });
