import React from "react";
import Image from "next/image";
import book from "/public/assets/images/book-islamic.png";
import useTranslation from "next-translate/useTranslation";

const HeroCard = () => {
  const { t } = useTranslation("index");
  return (
    <>
      <div className="rounded-[30px] shadow-md p-5 bg-white max-w-md">
        <div className="flex gap-4 mb-4">
          <Image src={book} alt="book image" className="rounded-lg" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <p className="text-[#006400]">{t("home.hero.conference")}</p>
              <p className="text-gray-300">{t("home.hero.date")}</p>
            </div>
            <div>
              <p className="font-bold text-black">{t("home.hero.title")}</p>
            </div>
          </div>
        </div>
        <div>
          <p>{t("home.hero.summary")}</p>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
