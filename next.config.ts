import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build process
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript checks during build
  },
};

export default nextConfig;
