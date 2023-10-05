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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    return config;
  },
  ...nextTranslate(),
};

module.exports = withTwin(nextConfig);
