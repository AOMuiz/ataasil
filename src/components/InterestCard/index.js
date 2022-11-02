import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import Icon from "../Icon";
import interest_image from "/public/assets/images/interest_img.png";
import SectionHeader from "../SectionHeader";

const InterestCard = () => {
  const { t } = useTranslation("index");
  return (
    <div className="flex justify-between items-center gap-20 p-20">
      <div className="w-[800px]">
        <SectionHeader title={t("interestcard.header")} />
        <p className="py-16">{t("interestcard.contents")}</p>
        <div className="flex gap-4 items-center justify-center cursor-pointer rounded-3xl w-28 bg-primary-P600 p-4 text-white ">
          <p>{t("interestcard.begin")}</p>
          <Icon id={"left"} />
        </div>
      </div>
      <Image src={interest_image} alt="interest image" />
    </div>
  );
};

export default InterestCard;
