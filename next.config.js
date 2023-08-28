module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  assetPrefix: process.env.NODE_ENV == "production" ? "https://crowd4flipping.com" : "",
  rewrites: process.env.NODE_ENV == "production" ? () => {
    return {
      beforeFiles: [
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
  } : ()=>({}),
};
