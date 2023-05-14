import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import CtaButton from "../CtaButton";
import Icon from "../Icon";
import Logo from "../Svg/Logo";
import DesktopMenuBar from "./DesktopMenuBar";

const BottomNav = () => {
  const { t } = useTranslation("index");

  return (
    <div className="relative flex items-center justify-between px-20 py-5 shadow-sm 2md:hidden">
      <div className="flex items-center gap-6">
        <Link href={"/"} passHref legacyBehavior>
          <a>
            <Logo width={80} height={60} className="cursor-pointer" />
          </a>
        </Link>
        <div className="flex h-auto cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-primary-P300 py-2 px-3">
          <span>
            <Icon id={"menu"} />
          </span>
          <span className="text-black">{t("navbar.menu")}</span>
        </div>
      </div>
      <div className="flex h-auto w-auto basis-1/3 items-center overflow-hidden rounded-full bg-gray-G20">
        <Icon id={"search"} className="px-3 text-primary-P300" size={20} />
        <input
          type="text"
          className="h-full w-full bg-gray-G20 py-3 outline-none placeholder:py-1 placeholder:font-light placeholder:text-black"
          placeholder={t("navbar.search placeholder")}
        />
      </div>
      <div className="flex items-center justify-evenly gap-6 font-bold">
        <p className="cursor-pointer text-gray-G30">
          <Link href={"login"}>{t("navbar.sign in")}</Link>
        </p>
        {/* <p className="rounded-full bg-primary-P300 w-auto  text-center text-white px-6 py-3 cursor-pointer">
          {t("navbar.sign up")}
        </p> */}
        <CtaButton>
          <Link href={"signup"}>{t("navbar.sign up")}</Link>
        </CtaButton>
      </div>
    </div>
  );
};

export default BottomNav;
