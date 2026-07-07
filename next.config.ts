import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www -> apex (only fires if www DNS actually reaches the app)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vertexstarter.com" }],
        destination: "https://vertexstarter.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
