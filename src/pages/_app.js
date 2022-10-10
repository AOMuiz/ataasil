import { useRouter } from "next/router";

import "../../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
