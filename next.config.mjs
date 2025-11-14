/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/process',
        destination: '/how-we-work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
