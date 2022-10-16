import React from "react";
import useTranslation from "next-translate/useTranslation";

const About = () => {
  const { t } = useTranslation("index");
  return <div className="text-xl">{t("about.title")}</div>;
};

export default About;
