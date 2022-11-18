import Link from 'next/link';
import i18n from '@i18n';
import LocaleLink from '@components/common/LocaleLink';
import SwitchLocale from '@components/atom/switch-locale';

export default function Header({ mini = false }) {
  const other = (i18n.options.supportedLngs as string[]).find((lng) => lng !== i18n.language);

  return (
    <header className={`${mini ? 'p-2' : 'p-10'} bg-slate-900 text-white`}>
      <ul className='container flex justify-center space-x-2 rtl:space-x-reverse'>
        <li>
          <LocaleLink href='/'>{i18n.t('common:home')}</LocaleLink>
        </li>
        {/* <li>
          <LocaleLink href='/users'>{i18n.t('common:users')}</LocaleLink>
        </li> */}

        <li>
          {/* No way to know the current path in server compoenent ? to prefix locale to "/${other}/currentPath" */}
          <Link href={`/${other}`}>{i18n.t(`common:${other}`)}</Link>
        </li>

        <li>
          <SwitchLocale />
        </li>
      </ul>
    </header>
  );
}
