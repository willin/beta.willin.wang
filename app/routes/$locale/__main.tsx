import { type MetaFunction } from '@remix-run/node';
import { Demo } from '~/components/demo';
import { Document } from '~/components/document';
import { i18n } from '~/i18n';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: i18n.t('site.title'),
  description: i18n.t('site.description'),
  viewport: 'width=device-width, initial-scale=1'
});

export default function Page() {
  return (
    <Document>
      <Demo />
    </Document>
  );
}
