import React from "react";
import Icon from "../Icon";
import Image from "next/image";
import ownerIcon from "/public/assets/images/owner.png";
import cardImage from "/public/assets/images/card-img.png";
import useTranslation from "next-translate/useTranslation";

const CourseCard = ({ courseDetail }) => {
  const { t } = useTranslation("index");

  return (
    <>
      <article className="w-72 rounded-[30px] bg-white shadow-md">
        <Image src={cardImage} alt="" />
        <div className="p-6">
          <div className="flex justify-between">
            <div className="flex cursor-pointer items-center gap-2">
              <Icon id={"book"} className="cursor-pointer" size="20" />
              <p>{t("coursecards.topic")}</p>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <Icon id={"clock"} className="cursor-pointer" size="20" />
              <p>{t("coursecards.date")}</p>
            </div>
          </div>
          <p className="cursor-pointer py-3 text-lg font-bold">
            {t("coursecards.title")}
          </p>
          <p>{t("coursecards.summary")}</p>
          <div className="flex items-center justify-between py-3">
            <div className="flex cursor-pointer items-center gap-2 ">
              <Image src={ownerIcon} alt="" />
              <p>{t("coursecards.owner")}</p>
            </div>
            <p className="cursor-pointer text-primary-P300">
              {t("coursecards.amount")}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default CourseCard;
