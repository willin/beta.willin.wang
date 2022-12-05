import { use } from 'react';
import { getPageLinks } from '@/models/contents';
import { LocaleLink } from '@/ui/locale-link';
import { PageLinksWithI18n } from './page-links-i18n';

export function PageLinks({ className, locale }: { className: string; locale: string }) {
  const pages = use(getPageLinks(locale));

  if (!pages) return null;

  return (
    <ul className={className}>
      <PageLinksWithI18n />
      {pages.map((page) => (
        <li key={page.slug}>
          <LocaleLink href={`/${page.slug}`}>{page.title}</LocaleLink>
        </li>
      ))}
    </ul>
  );
}
