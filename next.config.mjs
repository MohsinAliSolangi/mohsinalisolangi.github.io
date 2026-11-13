/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: '/builds', destination: '/#products', permanent: false },
      { source: '/builds/', destination: '/#products', permanent: false },
      { source: '/builds/smart-clinic', destination: '/smart-clinic', permanent: true },
      { source: '/builds/smart-clinic/', destination: '/smart-clinic', permanent: true },
    ]
  },
};

export default nextConfig;
