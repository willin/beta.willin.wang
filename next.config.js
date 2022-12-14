/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // runtime: 'experimental-edge', // 'node.js' (default) | 'experimental-edge'
    appDir: true,
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['esbuild', '@mdx-js/esbuild', 'shiki', '@code-hike/mdx', 'mdx-bundler']
  }
};

module.exports = nextConfig;
// vercel.json:
// "regions": ["hnd1"]
