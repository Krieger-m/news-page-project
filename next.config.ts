import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.frontend-testpage.org',
        port: '',
        pathname: '/uploads/**',
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
