import { use } from 'react';
import { ContentType, getContentBySlug } from '@/models/contents';
import { mdx } from '@/lib/mdx';
import { useMemo } from 'react';
import { useMdxComponent } from './mdx-component';
import { updateContentInteract } from '@/models/interactions';
import { NotTranslated } from './components/not-translated';

// import { getContentsStaticParams, ContentType } from '@/models/contents';
// export async function generateStaticParams() {
//   const data = await getContentsStaticParams(ContentType.PAGE);

//   console.log(data);
//   return data;
// }

export default function ContentPage(type: ContentType) {
  return function Page({ params: { slug, locale } }: { params: { locale: string; slug: string } }) {
    const content = use(getContentBySlug(slug, type, locale));
    if (!content) return null;
    const code = use(mdx(content.body));
    if (!code) return null;
    use(updateContentInteract(content.slug, content.type, locale, 'view'));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Component = useMemo(() => useMdxComponent(code), [code]);

    return (
      <div className='flex justify-center'>
        <div className='w-full max-w-screen-2xl'>
          <div className='text-center py-10'>
            <h1 className='text-5xl text-primary' style={{ textShadow: '0 0 3px rgba(0,0,0,0.25)' }}>
              {content.title}
            </h1>
            {content.locale !== locale && <NotTranslated />}
          </div>
          <article className='card glass prose max-w-none p-6 mb-6'>
            <Component />
          </article>
        </div>
      </div>
    );
  };
}
