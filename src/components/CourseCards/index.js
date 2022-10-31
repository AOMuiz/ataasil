import useTranslation from "next-translate/useTranslation";
import React from "react";
import Image from "next/image";
import cardImage from "/public/assets/images/card-img.png";
import ownerIcon from "/public/assets/images/owner.png";
import Icon from "../Icon";
import SectionCategory from "./sectioncategory";
import SectionTitle from "./sectiontitle";

const CourseCards = () => {
  const { t } = useTranslation("index");

  return (
    <div>
      <SectionTitle />
      <SectionCategory />
      <div tw=" w-[284.09px] rounded-[30px] bg-[#FFFFFF] shadow-md">
        <Image src={cardImage} alt="" />
        <div tw="p-3">
          <div tw="flex justify-between">
            <div tw=" flex items-center cursor-pointer gap-2">
              <Icon id={"book"} tw="cursor-pointer" size="20" />
              <p>{t("coursecards.topic")}</p>
            </div>
            <div tw=" flex items-center cursor-pointer gap-2">
              <Icon id={"clock"} tw="cursor-pointer" size="20" />
              <p>{t("coursecards.date")}</p>
            </div>
          </div>
          <p tw="cursor-pointer py-3 font-bold text-[18px]">
            {t("coursecards.title")}
          </p>
          <p>{t("coursecards.summary")}</p>
          <div tw="flex justify-between items-center py-3">
            <div tw=" flex items-center cursor-pointer gap-2 ">
              <Image src={ownerIcon} alt="" />
              <p>{t("coursecards.owner")}</p>
            </div>
            <p tw="cursor-pointer text-[#31C0CC]">{t("coursecards.amount")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
