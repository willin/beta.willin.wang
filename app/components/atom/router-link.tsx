import { type NavLinkProps } from '@remix-run/react';
import clsx from 'classnames';
import { LocaleNavLink } from './locale-link';

export function RouteLink({
  children,
  to
}: Pick<NavLinkProps, 'children' | 'to'>) {
  return LocaleNavLink({
    to,
    className: ({ isActive }) =>
      clsx(isActive ? 'glass' : 'btn-ghost', 'btn btn-sm rounded-btn'),
    children
  });
}
