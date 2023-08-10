const nextTranslate = require("next-translate");
const withTwin = require("./withTwin.js");
const path = require("node:path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const cMapsDir = path.join(
  path.dirname(require.resolve("pdfjs-dist/package.json")),
  "cmaps"
);

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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    return config;
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: cMapsDir,
          to: "cmaps/",
        },
      ],
    }),
  ],
  ...nextTranslate(),
};

module.exports = withTwin(nextConfig);
