import useTranslation from "next-translate/useTranslation";
import React from "react";

const CourseCards = () => {
  const { t } = useTranslation("index");

  return (
    <div>
      <div tw="flex justify-between w-[284.09px] h-[404px] rounded-[30px] bg-[#FFFFFF]">
        <div tw="cursor-pointer">
          <p>{t("coursecards.topic")}</p>
        </div>
        <div>
          <p tw="cursor-pointer">{t("coursecards.date")}</p>
        </div>
      </div>
      <p tw="cursor-pointer">{t("coursecards.title")}</p>
    </div>
  );
};

export default CourseCards;
