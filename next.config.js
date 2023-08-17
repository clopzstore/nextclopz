/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false, 
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
