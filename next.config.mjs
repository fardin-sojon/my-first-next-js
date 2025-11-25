/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',    // যেকোনো host
        port: '',          // empty
        pathname: '/**',   // যেকোনো path
      },
    ],
  },
};

export default nextConfig;
