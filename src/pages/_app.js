import { useRouter } from "next/router";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import GlobalStyles from "../components/GlobalStyles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <title>Ataasil University</title>
      </Head>
      <Provider store={store}>
        <GlobalStyles />
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      </Provider>
    </>
  );
}

export default MyApp;
