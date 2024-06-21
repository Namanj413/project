/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "d19ibjqkr6unyx.cloudfront.net",
            pathname: "**",
          },
          {
            protocol: "https",
            hostname: "thefounders-blog.s3.amazonaws.com",
            pathname: "**",
          },
          {
            protocol: "https",
            hostname: "images.squarespace-cdn.com",
            pathname: "**",
          },
          {
            protocol: "https",
            hostname: "source.unsplash.com",
            pathname: "**",
          },
        ],
      },

      
};

export default nextConfig;
