import React from "react";
import useTranslation from "next-translate/useTranslation";
import Icon from "../Icon";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const TopNav = () => {
  const { t } = useTranslation("index");
  return (
    <>
      <div tw="bg-white flex px-16 font-bold justify-between py-3 border-b-2 border-gray-G20">
        <div tw="flex justify-between gap-4 text-gray-G30 items-baseline">
          <p tw="cursor-pointer">{t("navbar.Join us")}</p>
          <p tw="cursor-pointer">{t("navbar.corporate training")}</p>
          <p tw="cursor-pointer">{t("navbar.blog")}</p>
          <LocaleSwitcher />
        </div>
        <div tw="flex gap-4 text-[#D5D5D5] items-center">
          <Icon id={"youtube"} tw="cursor-pointer" />
          <Icon id={"facebook"} tw="cursor-pointer" />
          <Icon id={"instagram"} tw="cursor-pointer" />
          <Icon id={"twitter"} tw="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default TopNav;
