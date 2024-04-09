/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  env: {},

  compiler: {
    styledComponents: true
  }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
