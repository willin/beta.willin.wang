import { use } from 'react';
import { ContentType, getContentBySlug } from '@/models/contents';
import { mdx } from '@/lib/mdx';
import { useMdxComponent } from '@/ui/mdx-component';

// import { getContentsStaticParams, ContentType } from '@/models/contents';
// export async function generateStaticParams() {
//   const data = await getContentsStaticParams(ContentType.PAGE);

//   console.log(data);
//   return data;
// }

export default function Page({ params: { slug, locale } }: { params: { locale: string; slug: string } }) {
  const content = use(getContentBySlug(slug, ContentType.PAGE, locale));
  if (!content) return null;
  const code = use(mdx(content.body));
  if (!code) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Component = useMdxComponent(code);

  return (
    <div>
      <h1>Hello</h1>
      <article className='card glass prose dark:prose-invert max-w-none p-6 mb-6 text-primary-content'>
        <Component />
      </article>
    </div>
  );
}
