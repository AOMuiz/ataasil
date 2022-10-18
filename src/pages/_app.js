import { useRouter } from "next/router";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import GlobalStyles from "../components/GlobalStyles";

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
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
