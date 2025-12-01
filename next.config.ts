import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com' , 'unsplash.com' , 'plus.unsplash.com'],
  },
  reactCompiler: true,
};

export default nextConfig;
