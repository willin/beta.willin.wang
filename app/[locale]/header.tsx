import { LocaleLink } from '@/ui/locale-link';
import { LanguageChange } from './languages';
import { PageLinks } from './page-links';
import { ThemeChange } from './themes';

export function MainHeader({ locale }: { locale: string }) {
  return (
    <header className='fixed flex justify-center w-full z-20 opacity-90 hover:opacity-100 bg-base-100'>
      <div className='w-full max-w-screen-2xl navbar'>
        <div className='navbar-start'>
          <div className='flex-none lg:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </label>
          </div>
          <div className='flex-1 px-2 mx-2 font-bold'>
            <LocaleLink href='/'>Willin Wang</LocaleLink>
          </div>
        </div>
        <div className='navbar-center'>
          <div className='flex-none hidden lg:block'>
            <PageLinks className='menu menu-horizontal' locale={locale} />
          </div>
        </div>
        <div className='navbar-end'>
          <LanguageChange />
          <ThemeChange />
        </div>
      </div>
    </header>
  );
}
