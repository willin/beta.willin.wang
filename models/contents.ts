import { cache } from 'react';
import 'server-only';
import { getDirectusClient } from './directus';
import { Tags } from './tags';

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
  tags: Tags[];
  date_created: string;
  date_updated: string;
};

export const preload = (locale: string) => {
  void getPageLinks(locale);
};

export const getPageLinks = cache(async (locale: string) => {
  const directus = await getDirectusClient();
  const { data } = await directus.items('contents').readByQuery({
    filter: {
      type: {
        _eq: ContentType.PAGE
      },
      locale: {
        _eq: locale
      },
      status: {
        _eq: ContentStatus.PUBLISHED
      }
    },
    fields: ['slug', 'title']
  });
  return data;
});

// export const getContentsStaticParams = cache(async (type: ContentType) => {
//   const directus = await getDirectusClient();

//   const { data } = await directus.items('contents').readByQuery({
//     status: ContentStatus.PUBLISHED,
//     type,
//     fields: ['slug', 'locale']
//   });
//   return data;
// });
