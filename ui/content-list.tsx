import clsx from 'classnames';
import { use } from 'react';
import { ContentType, getContentList } from '@/models/contents';
import { getTagsFromContents } from '@/models/tags';
import { InteractionType, updateContentInteract } from '@/models/interactions';
import { LocaleLink } from './locale-link';

const classNames = ['btn-primary', 'btn-warning', 'btn-secondary', 'btn-info', 'btn-success', 'btn-accent', 'btn-error'];

export default function ContentList(type: ContentType) {
  return function Page({ params: { locale } }: { params: { locale: string } }) {
    const contents = use(getContentList(type, locale));
    if (!contents) return null;
    use(updateContentInteract(type, InteractionType.OTHER, locale, 'view'));
    const tags = getTagsFromContents(contents);

    return (
      <div className='flex justify-center'>
        <div className='w-full max-w-screen-2xl'>
          <div className='text-center py-10'>
            <div className='my-2 flex flex-wrap items-center flex-row'>
              {tags.map(({ tag, count }, i) => (
                <button className={clsx('btn btn-sm m-2', classNames[i % classNames.length])} key={`${tag.name}-${count}`}>
                  {tag.name}
                  <div className='ml-1 badge badge-outline'>{count}</div>
                </button>
              ))}
            </div>
            {contents.map((content) => (
              <div key={content.slug} className='card bg-base-100 text-neutral-content my-2'>
                {/* <figure className='p-6'>
                  <img
                    alt='thumbnail'
                    src={frontmatter.image || 'https://via.placeholder.com/300x200?text=%E6%97%A0%E5%9B%BE'}
                    className='rounded-lg shadow-lg overflow-hidden h-[200px] !w-[300px]'
                  />
                </figure> */}
                <div className='card-body'>
                  <h2 className='card-title text-primary'>
                    <LocaleLink href={`/posts/${content.slug}`}>{content.title}</LocaleLink>
                  </h2>
                  <div className='flex justify-start'>
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
                      {content.wordcount}
                    </div>
                  </div>
                  {/* <PostMeta frontmatter={frontmatter} />
                  <p>{frontmatter.description}</p>
                   */}
                  {content.tags && (
                    <div className='card-actions'>
                      <div className='btn-group content-center'>
                        {content.tags.map(({ tags_id: tag }) => (
                          <button className='btn btn-outline btn-xs' key={`${content.slug}-${tag.slug}`}>
                            {tag.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
}
