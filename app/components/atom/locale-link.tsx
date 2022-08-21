import {
  Link,
  type LinkProps,
  NavLink,
  type NavLinkProps
} from '@remix-run/react';
import { useI18n } from 'remix-i18n';

export function LocaleLink({
  to,
  children,
  ...props
}: LinkProps & { to: string }) {
  const i18n = useI18n();
  const path = `/${i18n.locale()}${to}`;

  return (
    <Link to={path} {...props}>
      {children}
    </Link>
  );
}

export function LocaleNavLink({
  to,
  children,
  ...props
}: NavLinkProps & { to: string }) {
  const i18n = useI18n();
  const path = `/${i18n.locale()}${to}`;

  return (
    <NavLink to={path} {...props}>
      {children}
    </NavLink>
  );
}
