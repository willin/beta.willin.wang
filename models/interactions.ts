import { cache } from 'react';
import { getDirectusClient } from './directus';

export type Interactions = {
  id: string;
  slug: string;
  type: string;
  likes: number;
  views: number;
  date_updated: string;
};

export const getContentViews = cache(async (slugs: string[]) => {
  const directus = await getDirectusClient();
  const { data } = await directus.items('interactions').readByQuery({
    filter: {
      slug: {
        _in: slugs
      }
    }
  });
  return data;
});

export const contentInteract = async (slug: string, type: 'like' | 'view' = 'view') => {
  const directus = await getDirectusClient();
  const { data } = await directus.items('interactions').readByQuery({
    filter: {
      slug
    }
  });
  const { id, likes = 0, views = 0 } = data?.[0] as Interactions;
  if (id) {
    await directus.items('interactions').updateOne(id, {
      likes: type === 'like' ? likes + 1 : likes,
      views: type === 'view' ? views + 1 : views
    });
  } else {
    await directus.items('interactions').createOne({
      slug,
      likes: type === 'like' ? 1 : 0,
      views: type === 'view' ? 1 : 0
    });
  }
};
