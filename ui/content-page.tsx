import { use } from 'react';
import { ContentType, getContentBySlug } from '@/models/contents';
import { mdx } from '@/lib/mdx';
import { useMemo } from 'react';
import { useMdxComponent } from './mdx-component';
import { getContentViews, updateContentInteract } from '@/models/interactions';
import { NotTranslated } from './components/not-translated';
import { formatNumber } from '@/lib/utils';

// import { getContentsStaticParams, ContentType } from '@/models/contents';
// export async function generateStaticParams() {
//   const data = await getContentsStaticParams(ContentType.PAGE);

//   console.log(data);
//   return data;
// }

export default function ContentPage(type: ContentType) {
  return function Page({ params: { slug, locale } }: { params: { locale: string; slug: string } }) {
    const content = use(getContentBySlug(slug, type, locale));
    const interactions = use(getContentViews(content.slug, content.type, locale));
    if (!content || !interactions) return null;
    const code = use(mdx(content.body));
    if (!code) return null;
    void updateContentInteract(content.slug, content.type, locale, 'view');

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
            <div className='flex justify-center mt-10'>
              <div className='badge badge-info mr-2 text-secondary'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                &nbsp;
                {new Date(content.date_created).toLocaleDateString()}
              </div>
              <div className='badge badge-info mr-2 text-secondary'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
                &nbsp;
                {formatNumber(interactions.views)}
              </div>
              <div className='badge badge-info mr-2 text-secondary'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                  />
                </svg>
                &nbsp;
                {Math.ceil(content.readtime)}
              </div>
              <div className='badge badge-info mr-2 text-secondary'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8'
                  />
                </svg>
                &nbsp;
                {formatNumber(content.wordcount)}
              </div>
            </div>
          </div>
          <article className='card glass prose max-w-none p-6 mb-6'>
            <Component />
          </article>
        </div>
      </div>
    );
  };
}
