'use client';
import { useI18n } from '@/i18n';

export function NotTranslated() {
  const { t } = useI18n();

  return (
    <p className='text-secondary py-2'>
      {t('meta.not_translated')}
      <a
        href='https://github.com/willin/willin.wang/issues/new'
        target='_blank'
        className='hover:text-primary'
        aria-label='Translate'
        rel='noopener noreferrer'>
        {t('meta.translate_link')}
      </a>
    </p>
  );
}
