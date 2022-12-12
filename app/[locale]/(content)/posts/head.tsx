import i18n from '@/i18n';
import DefaultHead from '../../head';

export default function Head({ params: { locale } }: { params: { locale: string } }) {
  i18n.locale(locale);

  return (
    <>
      <DefaultHead imported />
      <title>{`${i18n.t('post', locale)} - Willin Wang`}</title>
    </>
  );
}
