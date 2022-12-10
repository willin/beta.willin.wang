import path from 'path';
import { bundleMDX } from 'mdx-bundler';
// Plugins
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkGithub from 'remark-github';
// import rehypePrismPlus from 'rehype-prism-plus';
// import { remarkCodeHike } from '@code-hike/mdx';
// import theme from './shiki-github-dark-theme';

if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe');
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild');
}

export async function mdx(source: string): Promise<string> {
  const { code } = await bundleMDX({
    source,
    mdxOptions(options) {
      // eslint-disable-next-line no-param-reassign
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // [rehypePrismPlus, { ignoreMissing: true, showLineNumbers: true }],
        rehypeSlug,
        rehypeAutolinkHeadings
      ];
      // eslint-disable-next-line no-param-reassign
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // [
        //   remarkCodeHike,
        //   {
        //     skipLanguages: ['mermaid'],
        //     theme,
        //     lineNumbers: true,
        //     showCopyButton: true,
        //     autoImport: false
        //   }
        // ],
        // [
        //   remarkMermaid,
        //   {
        //     theme: 'dark'
        //   }
        // ],
        remarkGfm,
        [remarkGithub, { repository: 'willin/willin.wang' }]
      ];

      return options;
    }
  });

  return code;
}
