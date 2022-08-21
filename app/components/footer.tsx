import { useMatches } from '@remix-run/react';
import clsx from 'classnames';
import { useI18n } from 'remix-i18n';
import { LocaleLink } from './atom/locale-link';
import { Github, CSDN, Juejin, SegmentFault, WillinLogo, Zhihu } from './svg';

export function Footer() {
  const { t } = useI18n();
  const matches = useMatches();

  return (
    <footer className='p-4 sm:p-6 bg-base-200 text-base-content opacity-90'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <LocaleLink to='/'>
            <WillinLogo size='5em' />
          </LocaleLink>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
          {/* <div className={clsx({ hidden: posts.length === 0 })}>
            <ul>
              {posts
                .filter((x) => x.type === 'pages')
                .map((page) => (
                  <li key={page.slug}>
                    <LocaleLink to={`/${page.slug}`}>{page.title}</LocaleLink>
                  </li>
                ))}
            </ul>
          </div> */}
          <div>
            <ul>
              <li>
                <LocaleLink to='/'>{t('nav.home')}</LocaleLink>
              </li>
              <li>
                <LocaleLink to='/posts'>{t('nav.posts')}</LocaleLink>
              </li>
              <li>
                <LocaleLink to='/playground'>{t('nav.playground')}</LocaleLink>
              </li>
            </ul>
          </div>

          {/* <div>
            <ul>
              <li className='mb-4'>
                <a
                  href='#'
                  target='_blank'
                  className='text-gray-600 hover:underline dark:text-gray-400'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  target='_blank'
                  className='text-gray-600 hover:underline dark:text-gray-400'>
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Willin Wang <small>&copy; 2002 ~ {new Date().getFullYear()}.</small>
          <small>
            Made with ❤️ and{' '}
            <a
              href='http://remix.run'
              target='_blank'
              rel='noopener noreferrer'>
              Remix
            </a>{' '}
            |{' '}
            <a
              href='https://beian.miit.gov.cn/'
              target='_blank'
              rel='noopener noreferrer'>
              苏ICP备17011988号-1
            </a>
          </small>
        </span>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <a
            href='https://segmentfault.com/u/willin'
            target='_blank'
            className='hover:text-secondary'
            rel='noopener noreferrer'
            aria-label='SegmentFault'>
            <SegmentFault />
          </a>

          <a
            href='https://blog.csdn.net/jslygwx?type=blog'
            target='_blank'
            className='hover:text-secondary'
            rel='noopener noreferrer'
            aria-label='CSDN'>
            <CSDN />
          </a>
          <a
            href='https://www.zhihu.com/people/willin'
            target='_blank'
            className='hover:text-secondary'
            rel='noopener noreferrer'
            aria-label='知乎'>
            <Zhihu />
          </a>

          <a
            href='https://juejin.cn/user/1873223546052391'
            target='_blank'
            className='hover:text-secondary'
            rel='noopener noreferrer'
            aria-label='掘金'>
            <Juejin />
          </a>

          <a
            href='https://github.com/willin'
            target='_blank'
            className='hover:text-secondary'
            aria-label='Github'>
            <Github />
          </a>
        </div>
      </div>
    </footer>
  );
}
