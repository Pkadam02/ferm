import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "findthefirm.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
