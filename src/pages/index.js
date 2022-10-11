import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar/Navbar";

const courseCard = {
  ar: {
    title: "كتاب التوحيد للشيخ عثيمين",
    summary:
      "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك الت",
  },
  en: {
    title: "The book of Tawhid of Sheikh Uthaymeen",
    summary:
      "But it is necessary to make clear to you that all these misconceptions",
  },
};

export default function Home() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation("common");
  const { title, summary } = courseCard[locale];

  return (
    <div className="p-5">
      <Head>
        <title>Ataasil University</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="p-2 m-2">
          <span>Current Language: </span>
          <span className="border-2 text-white p-1 bg-blue-500">{locale}</span>
        </div>
      </div>
      <main>
        <Logo />
        <div className="py-3">
          <p className="font-bold text-lg">
            Translation coming from local object
          </p>
          <Text className="font-bold underline text-3xl my-4">{title}</Text>
          <Text>{summary}</Text>
        </div>

        <div className="py-3">
          <p className="font-bold text-lg">
            Translation coming from next-i18next
          </p>
          <Text className="font-bold underline text-3xl my-4">
            {t("title")}
          </Text>
          <p>{t("summary")}</p>
        </div>
        <footer></footer>
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navbar"])),
  },
});

const Text = styled.p`
  color: var(--color-primary);
  line-height: 31px;
`;

const SelectLanguage = styled.div`
  display: flex;
  /* justify-content: space-between; */
  font-size: 1.2rem;
  gap: 1rem;
`;
