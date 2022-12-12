import { Contents } from './contents';

export type Tags = {
  id: string;
  slug: string;
  locale: string;
  name: string;
};

export const getTagsFromContents = (contents: Contents[]): { tag: Tags; count: number }[] => {
  const tags: { tag: Tags; count: number }[] = [];
  contents.forEach((content) => {
    content.tags.forEach((tag) => {
      const t = tags.find((t) => t.tag.id === tag.tags_id.id);
      if (t) {
        t.count += 1;
      } else {
        tags.push({ tag: tag.tags_id, count: 1 });
      }
    });
  });
  return tags;
};
