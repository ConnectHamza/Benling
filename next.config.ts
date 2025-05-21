import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
=======
    reactStrictMode:false,
    ignoreBuildErrors: true,
    experimental: {
        appDir: true,
    },
>>>>>>> b84ec308e73fba63be65a98e8e496780b38e4002
};

export default nextConfig;