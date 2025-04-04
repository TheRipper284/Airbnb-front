import { hostname } from 'os';

/** @type {import('next'),NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
          protocol: 'http',
          hostname: 'locahost',
          port: '8000',
          pathname: '/**'
      }
    ]
  }
};

export default nextConfig;