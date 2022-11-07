import useTranslation from "next-translate/useTranslation";
import React from "react";
import Icon from "../Icon";
import Logo from "../Svg/Logo";

const BottomNav = () => {
  const { t } = useTranslation("index");

  return (
    <div className="flex px-20 py-4 justify-between items-center shadow-sm">
      <div className="flex items-center gap-6">
        <Logo width={80} height={60} className="cursor-pointer" />
        <p className="flex justify-center items-center border-2 border-primary-P300 rounded-full px-2 h-auto py-1 cursor-pointer">
          <span className="p-2">
            <Icon id={"menu"} />
          </span>
          {/* fix padding here for english */}
          <span className="text-black pl-2">{t("navbar.menu")}</span>
        </p>
      </div>
      <div className="flex items-center basis-1/3 bg-gray-G20 h-auto rounded-full overflow-hidden py-2 w-auto">
        <Icon id={"search"} className="text-primary-P300 px-3" size={20} />
        <input
          type="text"
          className="bg-gray-G20 outline-none w-full placeholder:text-black placeholder:font-light placeholder:py-1"
          placeholder={t("navbar.search placeholder")}
        />
      </div>
      <div className="flex items-center justify-evenly gap-6 font-bold">
        <p className="cursor-pointer text-gray-G30">{t("navbar.sign in")}</p>
        <p className="rounded-full bg-primary-P300 w-auto  text-center text-white px-4 py-2 cursor-pointer">
          {t("navbar.sign up")}
        </p>
      </div>
    </div>
  );
};

export default BottomNav;
