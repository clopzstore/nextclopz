/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false, 
  reactStrictMode: true,
  experimental: {
    runtime: 'experimental-edge',
  },

  swcMinify: true,
} 
