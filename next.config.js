/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    runtime: 'experimental-edge', // 'node.js' (default) | 'experimental-edge'
    appDir: true
  }
};

module.exports = nextConfig;
