module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: "/pro",
          has: [
            {
              type: "host",
              value: "pro.crowd4flipping.com",
            },
          ],
          destination: "/pages/pro",
        },
      ],
    };
  },
};
