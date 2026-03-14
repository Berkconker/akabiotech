import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "akabiotech.com" }],
  },
};

export default nextConfig;
