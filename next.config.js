module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  assetPrefix: "https://crowd4flipping.com",
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pro.crowd4flipping.com",
          },
        ],
        destination: "/pro",
      },
    ];
  },
};
