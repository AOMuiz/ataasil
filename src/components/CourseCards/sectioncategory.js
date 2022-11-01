import React from "react";
import useTranslation from "next-translate/useTranslation";

const SectionCategory = () => {
  const { t } = useTranslation("index");

  return (
    <>
      <p className="cursor-pointer my-8 rounded-3xl border w-fit text-center px-4 py-2 bg-white">
        {t("coursecards.section title")}
      </p>
    </>
  );
};

export default SectionCategory;
