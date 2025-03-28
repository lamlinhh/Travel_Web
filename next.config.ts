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
