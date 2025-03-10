import type { NextConfig } from 'next';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 클라이언트에서 요청할 경로 (예: /api/login)
        destination: `${apiUrl}/:path*`, // 서버로 리다이렉션할 경로
      },
    ];
  },
};

export default nextConfig;
