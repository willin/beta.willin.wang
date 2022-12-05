'use client';

import { LocaleLink } from '@/ui/locale-link';
import { useI18n } from '@/i18n';

export function PageLinksWithI18n() {
  const { t } = useI18n();

  return (
    <>
      <li>
        <LocaleLink href='/posts'>{t('post')}</LocaleLink>
      </li>
      <li>
        <LocaleLink href='/snippets'>{t('snippet')}</LocaleLink>
      </li>
    </>
  );
}
