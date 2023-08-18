/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false, 
  reactStrictMode: true,  
  output: "standalone",
  experimental: {
    runtime: 'experimental-edge',
  },
  swcMinify: true,
} 
