import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import CtaButton from "../CtaButton";
import Icon from "../Icon";
import Logo from "../Svg/Logo";

const BottomNav = () => {
  const { t } = useTranslation("index");

  return (
    <div className="flex px-20 py-5 justify-between items-center shadow-sm">
      <div className="flex items-center gap-6">
        <Link href={"/"} passHref={true}>
          <Logo width={80} height={60} className="cursor-pointer" />
        </Link>
        <p className="flex justify-center items-center border-2 border-primary-P300 rounded-full py-2 px-3 h-auto cursor-pointer gap-3">
          <span>
            <Icon id={"menu"} />
          </span>
          <span className="text-black">{t("navbar.menu")}</span>
        </p>
      </div>
      <div className="flex items-center basis-1/3 bg-gray-G20 h-auto rounded-full overflow-hidden w-auto">
        <Icon id={"search"} className="text-primary-P300 px-3" size={20} />
        <input
          type="text"
          className="bg-gray-G20 outline-none w-full placeholder:text-black placeholder:font-light placeholder:py-1 py-3 h-full"
          placeholder={t("navbar.search placeholder")}
        />
      </div>
      <div className="flex items-center justify-evenly gap-6 font-bold">
        <p className="cursor-pointer text-gray-G30">
          <Link href={"signin"}>{t("navbar.sign in")}</Link>
        </p>
        {/* <p className="rounded-full bg-primary-P300 w-auto  text-center text-white px-6 py-3 cursor-pointer">
          {t("navbar.sign up")}
        </p> */}
        <CtaButton>{t("navbar.sign up")}</CtaButton>
      </div>
    </div>
  );
};

export default BottomNav;
