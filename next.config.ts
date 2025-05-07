import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode:false,
    ignoreBuildErrors: true,
    experimental: {
        appDir: true,
    },
};

export default nextConfig;