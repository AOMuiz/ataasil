import React from "react";
import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  return (
    <>
      <nav className="bg-white flex px-8 font-bold justify-between py-3 border-b-2 border-gray-400 ">
        <div className="flex justify-between gap-4 text-gray-700 items-baseline">
          <p>{t("Join us")}</p>
          <p>{t("corporate training")}</p>
          <p>{t("blog")}</p>
          <LocaleSwitcher />
        </div>
        <div className="flex gap-4 text-gray-400 items-center">
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
