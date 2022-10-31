import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import CourseCards from "../components/CourseCards";
import InterestCard from "../components/InterestCard";

export default function Home() {
  const { t } = useTranslation("index");

  return (
    <div tw="p-5">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 tw="text-[40px]">{t("home.hero.title")}</h2>
      <div tw="flex gap-4"></div>
      <div tw="flex gap-4">
        <CourseCards />
      </div>
      <InterestCard />
    </div>
  );
}
