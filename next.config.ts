import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Spanish is the default language and lives at "/", English at "/en".
  // Internally both are rendered from app/[lang], so "/" is served by "/es".
  async redirects() {
    return [{ source: "/es", destination: "/", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/", destination: "/es" }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
