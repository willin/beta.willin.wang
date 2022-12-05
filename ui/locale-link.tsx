'use client';
import { fallbackLng } from '@/i18n';
import Link, { LinkProps } from 'next/link';
import { useI18n } from '../i18n/hook';

export function LocaleLink({ href, children, ...props }: LinkProps & { href: string; children: React.ReactNode }) {
  const { locale } = useI18n();
  const localeHref = locale() === fallbackLng ? href : `/${locale()}${href}`;

  return (
    <Link href={localeHref} {...props}>
      {children}
    </Link>
  );
}
