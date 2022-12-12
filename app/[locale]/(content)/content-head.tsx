import { use } from 'react';
import { ContentType, getContentBySlug } from '@/models/contents';
import DefaultHead from '../head';

export default function ContentHead(type: ContentType) {
  return function Head({ params: { slug, locale } }: { params: { locale: string; slug: string } }) {
    const content = use(getContentBySlug(slug, type, locale));
    if (!content) return <DefaultHead />;

    return (
      <>
        <DefaultHead imported />
        <title>{`${content.title} - Willin Wang`}</title>
        <meta name='description' content={content.body.substring(0, 300).replace(/\n|#/g, '')} />
        <meta name='keywords' content={content.tags.map((tag) => tag.tags_id.name).join(', ')} />
      </>
    );
  };
}
