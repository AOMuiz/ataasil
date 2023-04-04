import useTranslation from "next-translate/useTranslation";
import Icon from "../Icon";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import MobileNav from "./MobileNav";

const TopNav = () => {
  const { t } = useTranslation("index");
  return (
    <>
      <div className="flex justify-between border-b-2 border-gray-G20 bg-white px-20 py-4 font-bold 2md:hidden">
        <div className="flex items-baseline justify-between gap-4 text-gray-G30">
          <p className="cursor-pointer">{t("navbar.Join us")}</p>
          <p className="cursor-pointer">{t("navbar.corporate training")}</p>
          <p className="cursor-pointer">{t("navbar.blog")}</p>
          <LocaleSwitcher />
        </div>
        <div className="flex items-center gap-5 text-2xl text-[#D5D5D5]">
          <Icon id={"youtube"} className="cursor-pointer" />
          <Icon id={"facebook"} className="cursor-pointer" />
          <Icon id={"instagram"} className="cursor-pointer" />
          <Icon id={"twitter"} className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default TopNav;
