import { useI18n } from 'remix-i18n';
import { LocaleLink } from './atom/locale-link';
import { RouteLink } from './atom/router-link';
import { ToggleLocale } from './atom/toggle-locale';
import { ToggleTheme } from './atom/toggle-theme';

export function Header() {
  const i18n = useI18n();
  const { t } = i18n;

  return (
    <header className='fixed w-full z-20 opacity-90 hover:opacity-100'>
      <div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content'>
        <div className='px-2 mx-2 navbar-start'>
          <LocaleLink to='/'>
            <span className='text-lg font-bold'>Willin Wang</span>
          </LocaleLink>
        </div>
        <div className='hidden px-2 mx-2 navbar-center lg:flex'>
          <div className='flex items-stretch'>
            <RouteLink to='/'>{t('nav.home')}</RouteLink>
            <RouteLink to='/posts'>{t('nav.posts')}</RouteLink>
            <RouteLink to='/playground'>{t('nav.playground')}</RouteLink>
            <RouteLink to='/about'>{t('nav.about')}</RouteLink>
          </div>
        </div>
        <div className='navbar-end'>
          <ToggleTheme />
          <ToggleLocale />
        </div>
      </div>
    </header>
  );
}
