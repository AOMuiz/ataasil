import React from "react";
import Image from "next/image";
import book from "/public/assets/images/book-islamic.png";
import useTranslation from "next-translate/useTranslation";

const HeroCard = () => {
  const { t } = useTranslation("index");
  return (
    <>
      <div tw="rounded-[30px] shadow-md p-5" className="max-w-md">
        <div tw="flex gap-4 mb-4">
          <Image src={book} alt="book image" tw="rounded-lg" />
          <div tw="flex flex-col gap-3">
            <div tw="flex gap-3">
              <p tw="text-[#006400]">{t("home.hero.conference")}</p>
              <p tw="text-gray-300">{t("home.hero.date")}</p>
            </div>
            <div>
              <p tw="font-bold text-black">{t("home.hero.title")}</p>
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
