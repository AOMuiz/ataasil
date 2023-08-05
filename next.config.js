const nextTranslate = require("next-translate");
const withTwin = require("./withTwin.js");

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "images.unsplash.com"],
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  ...nextTranslate(),
};

module.exports = withTwin(nextConfig);
