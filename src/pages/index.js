import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import CourseCards from "../components/CourseCards";
import InterestCard from "../components/InterestCard";
import Hero from "../components/Hero";
import Help from "../components/Help";
import Testimonials from "../components/Testimonials/Index";
import WhyUs from "../components/WhyUs";

export default function Home() {
  const { t } = useTranslation("index");

  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <CourseCards />
      <InterestCard />
      <WhyUs />
      <Testimonials />
      <Help />
    </div>
  );
}
