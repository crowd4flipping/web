module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  assetPrefix: process.env.NODE_ENV == "production" ? "https://crowd4flipping.vercel.app" : "",
  rewrites: process.env.NODE_ENV == "production" ? () => {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "pro.crowd4flipping.vercel.app",
            },
          ],
          destination: "/pro",
        },
      ],
    };
  } : ()=>({}),
};
