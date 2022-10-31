import React from "react";
import useTranslation from "next-translate/useTranslation";

const SectionTitle = () => {
  const { t } = useTranslation("index");
  return <div tw="text-3xl	font-bold	">{t("coursecards.main topic")}</div>;
};

export default SectionTitle;
