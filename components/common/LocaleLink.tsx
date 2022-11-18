import i18n from '@i18n';
import Link, { LinkProps } from 'next/link';

type Props = { children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;
export default function LocaleLink({ children, ...props }: Props) {
  const defaultLng = (i18n.options.fallbackLng as string[])[0];
  const prefix = defaultLng === i18n.language ? '' : `/${i18n.language}`;

  return (
    <Link {...props} href={prefix + props.href}>
      {children}
    </Link>
  );
}
