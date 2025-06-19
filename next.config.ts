import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: '/crown-benling-about',
        destination: '/about-us',
        permanent: true,
      },
            {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/crown-benling-flash',
        destination: '/crown-electric-flash',
        permanent: true,
      },
      {
        source: '/crown-benling-knight-rider',
        destination: '/crown-electric-knight-rider',
        permanent: true,
      },
      {
        source: '/crown-benling-roshni-x',
        destination: '/crown-electric-roshni-x',
        permanent: true,
      },
      {
        source: '/crown-benling-firefly',
        destination: '/crown-electric-firefly',
        permanent: true,
      },
      {
        source: '/crown-benling-roshni',
        destination: '/crown-electric-roshni',
        permanent: true,
      },
      {
        source: '/crown-benling-ezee',
        destination: '/crown-electric-ezee',
        permanent: true,
      },
      {
        source: '/crown-benling-mini-scooty',
        destination: '/crown-electric-mini-scooty',
        permanent: true,
      },
      {
        source: '/crown-benling-fairy',
        destination: '/crown-electric-fairy',
        permanent: true,
      },
      {
        source: '/crown-benling-spark',
        destination: '/crown-electric-spark',
        permanent: true,
      },
      {
        source: '/crown-benling-performance-series',
        destination: '/crown-electric-performance-series',
        permanent: true,
      },
      {
        source: '/crown-benling-champion',
        destination: '/crown-electric-champion',
        permanent: true,
      },
      {
        source: '/crown-benling-victory',
        destination: '/crown-electric-victory',
        permanent: true,
      },
      {
        source: '/crown-benling-raftaar',
        destination: '/crown-electric-raftaar',
        permanent: true,
      },
            {
        source: '/crown-benling-cherry',
        destination: '/crown-electric-cherry',
        permanent: true,
      },

    ];
  },

};



export default nextConfig;