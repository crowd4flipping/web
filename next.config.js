module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  assetPrefix: "https://crowd4flipping.com",
  rewrites() {
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
  /* rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
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
      ],
    };
  }, */
};
