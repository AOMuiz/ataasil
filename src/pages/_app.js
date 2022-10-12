import { useRouter } from "next/router";

import "../../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const lang = locale == "ar" ? "ar" : "en";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
