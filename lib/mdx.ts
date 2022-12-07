import path from 'path';
import { bundleMDX } from 'mdx-bundler';

if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe');
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild');
}

export async function mdx(source: string): Promise<string> {
  const { code } = await bundleMDX({
    source
  });

  return code;
}
