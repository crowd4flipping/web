module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  rewrites() {
    return {
      beforeFiles: [
        {
          source: "/pro",
          has: [
            {
              type: "host",
              value: "pro.crowd4flipping.com",
            },
          ],
          destination: "pro.crowd4flipping.com",
        },
      ],
    };
  },
};
