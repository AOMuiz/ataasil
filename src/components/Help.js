import useTranslation from "next-translate/useTranslation";
import React from "react";

const Help = () => {
  const { t } = useTranslation("index");

  return (
    <div className="bg-neutral-N30 px-20 py-10">
      <p className="font-bold text-3xl pb-5">{t("home.help.need help")}</p>
      <div className="flex justify-between items-center text-lg text-gray-G30">
        <p>{t("home.help.summary")}</p>
        <button className="bg-primary-P300 p-3 rounded-full text-white">
          {t("home.help.action")}
        </button>
      </div>
    </div>
  );
};

export default Help;
