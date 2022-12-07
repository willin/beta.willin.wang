import { getMDXComponent } from 'mdx-bundler/client';
import { createElement, useMemo } from 'react';
import { AgeTimer } from './components/age-timer';

const mdxComponents = {
  a: (props: any) =>
    createElement('a', {
      target: '_blank',
      ...props
    }),
  // img: ({ src, ...rest }) =>
  //   createElement('img', {
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //     'data-src': src,
  //     className: 'post-image lazyload',
  //     ...rest
  //   }),
  AgeTimer: AgeTimer
};

/**
 * This should be rendered within a useMemo
 * @param code the code to get the component from
 * @returns the component
 */
function getMdxComponent(code: string) {
  const Component = getMDXComponent(code);
  function WMdxComponent({ components, ...rest }: Parameters<typeof Component>['0']) {
    return (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <Component components={{ ...mdxComponents, ...components }} {...rest} />
    );
  }
  return WMdxComponent;
}

export function useMdxComponent(code: string) {
  return useMemo(() => getMdxComponent(code), [code]);
}
