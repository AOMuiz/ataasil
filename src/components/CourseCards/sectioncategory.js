import React from "react";
import useTranslation from "next-translate/useTranslation";

const SectionCategory = () => {
  const { t } = useTranslation("index");

  return (
    <div tw="cursor-pointer py-10 ">
      <p tw="rounded-3xl border w-[155px] text-center py-1">
        {t("coursecards.section title")}
      </p>
    </div>
  );
};

export default SectionCategory;
