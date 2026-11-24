import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  // Endereço antigo redireciona para o novo, com o nome da clínica.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "rebeca-lira.vercel.app" }],
        destination: "https://clinicaequilibre.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
