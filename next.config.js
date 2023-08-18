/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false, 
  reactStrictMode: true,  
  images: { 
  domains: ["v5.airtableusercontent.com"], 
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'v5.airtableusercontent.com',
      port: '',
      pathname: '',
    },
  ],
},
  experimental: {
    runtime: 'experimental-edge',
  },
  swcMinify: true,
} 
