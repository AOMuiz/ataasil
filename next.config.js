/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["ar", "en"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "ar",
    localeDetection: false,
  },
};

module.exports = nextConfig;
