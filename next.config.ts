import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fittingjump-us.backendless.app",
      },
    ],
    loader: "custom",
    loaderFile: "./my/image/loader.js",
  },
};
export default nextConfig;
