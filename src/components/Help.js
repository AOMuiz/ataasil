import useTranslation from "next-translate/useTranslation";
import React from "react";
import SectionHeader from "./SectionHeader";

const Help = () => {
  const { t } = useTranslation("index");

  return (
    <div className="bg-neutral-N30 px-20 py-10">
      <SectionHeader title={t("home.help.need help")} />
      <div className="flex justify-between items-center text-lg text-gray-G30">
        <p>{t("home.help.summary")}</p>
        <button className="bg-primary-P300 py-3 px-5 rounded-full text-white">
          {t("home.help.action")}
        </button>
      </div>
    </div>
  );
};

export default Help;
