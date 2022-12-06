import { use } from 'react';
import { ContentType, getContentBySlug } from '@/models/contents';

// import { getContentsStaticParams, ContentType } from '@/models/contents';
// export async function generateStaticParams() {
//   const data = await getContentsStaticParams(ContentType.PAGE);

//   console.log(data);
//   return data;
// }

export default function Page({ params: { slug, locale } }: { params: { locale: string; slug: string } }) {
  const content = use(getContentBySlug(slug, ContentType.PAGE, locale));

  return (
    <div>
      <h1>Hello</h1>
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>
  );
}
