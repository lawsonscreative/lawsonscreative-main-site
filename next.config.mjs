/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Watch tailwind config for changes in dev mode
    if (!isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: config.watchOptions?.ignored?.filter(
          (ignore) => !ignore.includes('tailwind.config')
        ),
      };
    }
    return config;
  },
};

export default nextConfig;
