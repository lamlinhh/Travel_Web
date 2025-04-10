import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "https://travel-website-service.onrender.com/Login",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/lamlinhh/Travel_Web/**",
      },
    ],
    domains: ['raw.githubusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
  webpack(config: any) {
    config.resolve.alias["@"] = path.join(__dirname);
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    return config;
  },
};

export default nextConfig;
