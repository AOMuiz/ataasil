import { useRouter } from "next/router";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import GlobalStyles from "../components/GlobalStyles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo-client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouteGuard from "../components/RouteGuard";
import { pdfjs } from "react-pdf";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const lang = locale == "ar" ? "ar" : "en";
  const excludedRoutes = [
    "/",
    "/login",
    "/signup",
    "/contact",
    "/course",
    "/training-programs",
  ];

  // const Layout = Component.Layout || IndexLayout;

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.js",
      import.meta.url
    ).toString();
  }, []);

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
      <ApolloProvider client={client}>
        <Provider store={store}>
          <GlobalStyles />
          <ToastContainer rtl={dir === "rtl"} />
          <RouteGuard excludedRoutes={excludedRoutes}>
            <Navbar />
            {Component.PageLayout ? (
              <Component.PageLayout>
                <Component {...pageProps} />
              </Component.PageLayout>
            ) : (
              <Component {...pageProps} />
            )}
            {/* <Layout>
            <Component {...pageProps} />
          </Layout> */}
            <Footer />
          </RouteGuard>
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
