import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
