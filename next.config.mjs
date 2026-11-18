/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      // Keep the compatibility shim still needed by Next's supported browsers.
      '../build/polyfills/polyfill-module': './src/compat/url-can-parse.js',
    },
  },
};

export default nextConfig;
