/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      {
        source: "/media/:path*",
        destination: "http://134.209.115.88/media/:path*",
      },
    ];
  },
};

export default nextConfig;
