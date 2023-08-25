module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  assetPrefix: "crowd4flipping.com",
  rewrites() {
    return;
    /* {
      beforeFiles: */ [
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
    /*  }; */
  },
};
