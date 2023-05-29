/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: true },
  images: {
    domains: ["sothebys-com.brightspotcdn.com"],
  },
};

module.exports = nextConfig;
