import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import Icon from "../Icon";
import interest_image from "/public/assets/images/interest_img.png";

const InterestCard = () => {
  const { t } = useTranslation("index");
  return (
    <div tw="flex justify-center gap-8 p-16">
      <div tw=" w-[550px] p-8">
        <p tw="font-bold text-3xl py-6">{t("interestcard.header")}</p>
        <p tw="py-14">{t("interestcard.contents")}</p>
        <div tw="flex gap-4 items-center justify-center cursor-pointer rounded-3xl w-28 bg-primary-P600 p-4 text-white ">
          <p>{t("interestcard.begin")}</p>
          <Icon id={"left"} />
        </div>
      </div>
      <Image src={interest_image} alt="" />
    </div>
  );
};

export default InterestCard;
