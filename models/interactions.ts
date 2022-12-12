import { cache } from 'react';
import { ContentType } from './contents';
import { getDirectusClient } from './directus';

/* eslint-disable no-unused-vars */
export enum InteractionType {
  RSS = 'rss',
  OTHER = 'other'
}

export type Interactions = {
  id: string;
  slug: string;
  likes: number;
  views: number;
  locale: string;
  type: ContentType | InteractionType;
  date_updated: string;
};

export const getContentViewsBatch = cache(async (slugs: string[], locale: string, type: ContentType | InteractionType) => {
  const directus = await getDirectusClient();
  const { data } = await directus.items('interactions').readByQuery({
    filter: {
      slug: {
        _in: slugs
      },
      locale,
      type
    }
  });
  return data;
});

export const getContentViews = cache(async (slug: string, locale: string, type: ContentType | InteractionType) => {
  const data = await getContentViewsBatch([slug], locale, type);
  return data?.[0];
});

export const updateContentInteract = async (slug: string, locale: string, type: ContentType | InteractionType, interaction: 'like' | 'view' = 'view') => {
  const directus = await getDirectusClient();
  const { data } = await directus.items('interactions').readByQuery({
    filter: {
      slug,
      locale,
      type
    }
  });
  const { id, likes = 0, views = 0 } = data?.[0] as Interactions;
  if (id) {
    await directus.items('interactions').updateOne(id, {
      likes: interaction === 'like' ? likes + 1 : likes,
      views: interaction === 'view' ? views + 1 : views
    });
  } else {
    await directus.items('interactions').createOne({
      slug,
      likes: interaction === 'like' ? 1 : 0,
      views: interaction === 'view' ? 1 : 0,
      locale,
      type
    });
  }
};
