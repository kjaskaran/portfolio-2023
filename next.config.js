/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "camo.githubusercontent.com",
      "raw.githubusercontent.com",
      "th.bing.com",
      "media.licdn.com"
    ],
  },
};

module.exports = nextConfig;
