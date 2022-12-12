import { use } from 'react';
import { ContentType, getContentList } from '@/models/contents';
import { getTagsFromContents } from '@/models/tags';
import { InteractionType, updateContentInteract } from '@/models/interactions';

export default function ContentList(type: ContentType) {
  return function Page({ params: { locale } }: { params: { locale: string } }) {
    const contents = use(getContentList(type, locale));
    if (!contents) return null;
    use(updateContentInteract(type, InteractionType.OTHER, locale, 'view'));
    const tags = getTagsFromContents(contents);

    return (
      <div>
        <pre>{JSON.stringify(contents, null, 2)}</pre>
        <pre>{JSON.stringify(tags, null, 2)}</pre>
      </div>
    );
  };
}
