/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true, 
  poweredByHeader: false, 
  reactStrictMode: true,  
  output: "export",
  experimental: {
    runtime: 'experimental-edge',
  },
  swcMinify: true,
} 
