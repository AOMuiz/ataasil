import useTranslation from "next-translate/useTranslation";
import Icon from "../Icon";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const TopNav = () => {
  const { t } = useTranslation("index");
  return (
    <>
      <div className="bg-white flex px-20 py-4 font-bold justify-between border-b-2 border-gray-G20">
        <div className="flex justify-between gap-4 text-gray-G30 items-baseline">
          <p className="cursor-pointer">{t("navbar.Join us")}</p>
          <p className="cursor-pointer">{t("navbar.corporate training")}</p>
          <p className="cursor-pointer">{t("navbar.blog")}</p>
          <LocaleSwitcher />
        </div>
        <div className="flex gap-5 text-[#D5D5D5] items-center text-2xl">
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
