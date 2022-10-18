import React from "react";
import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";

const Navbar = () => {
  const { t } = useTranslation("index");
  return (
    <>
      <nav tw="bg-white flex px-8 font-bold justify-between py-3 border-b-2 border-gray-400 ">
        <div tw="flex justify-between gap-4 text-gray-700 items-baseline">
          <p>{t("navbar.Join us")}</p>
          <p>{t("navbar.corporate training")}</p>
          <p>{t("navbar.blog")}</p>
          <LocaleSwitcher />
        </div>
        <div tw="flex gap-4 text-gray-400 items-center">
          <Icon id={"youtube"} />
          <Icon id={"facebook"} />
          <Icon id={"instagram"} />
          <Icon id={"twitter"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
