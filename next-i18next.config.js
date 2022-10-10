// used for SSR (getServerSideProps)
// const path = require('path')
// const localePath = path.resolve('./public/locales')

module.exports = {
  debug: process.env.NODE_ENV === "development",
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
  // localePath,
  reloadOnPrerender: process.env.NODE_ENV === "development",
  // serializeConfig: false,
};
