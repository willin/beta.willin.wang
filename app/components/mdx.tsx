import { createElement, useMemo } from 'react';
import * as mdxBundler from 'mdx-bundler/client';

const mdxComponents = {
  a: (props) =>
    createElement('a', {
      target: '_blank',
      ...props
    }),
  img: ({ src, ...rest }) =>
    createElement('img', {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'data-src': src,
      className: 'post-image lazyload',
      ...rest
    })
};
/**
 * This should be rendered within a useMemo
 * @param code the code to get the component from
 * @returns the component
 */
export function getMdxComponent(code: string) {
  const Component = mdxBundler.getMDXComponent(code);
  function WMdxComponent({ components, ...rest }: Parameters<typeof Component>['0']) {
    return (
      // @ts-expect-error the types are wrong here
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <Component components={{ ...mdxComponents, ...components }} {...rest} />
    );
  }
  return WMdxComponent;
}

function useMdxComponent(code: string) {
  return useMemo(() => getMdxComponent(code), [code]);
}

export function MdxComponent({ code, html }: { code?: string; html: string }) {
  let Component: any = null;
  if (typeof window !== 'undefined' && code) {
    // eslint-disable-next-line
    Component = useMdxComponent(code);
  }

  return (
    <>
      {Component ? (
        <div className='py-8'>
          <Component />
        </div>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <div className='py-8' dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  );
}
