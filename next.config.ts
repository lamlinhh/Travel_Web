module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/login",
        destination: "https://travel-website-service.onrender.com/Login",
      },
    ];
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          pathname: "/lamlinhh/Travel_Web/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  