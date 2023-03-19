const nextTranslate = require("next-translate");
const withTwin = require("./withTwin.js");

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  ...nextTranslate(),
};

module.exports = withTwin(nextConfig);
