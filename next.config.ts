import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://i.scdn.co/image/**')],
  },
  /* config options here */
};

export default nextConfig;
