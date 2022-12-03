'use client';
import { useI18n } from '../../i18n/hook';

export function I18nDemo() {
  const { t } = useI18n();
  return <h1 className='text-3xl pb-6'>{t('home')}</h1>;
}
