import useTranslation from "next-translate/useTranslation";
import Icon from "../Icon";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Link from "next/link";

const TopNav = () => {
  const { t } = useTranslation("index");
  return (
    <>
      <div className="flex  justify-between border-b-2 border-gray-G20 bg-white px-20 py-4 font-bold 2md:hidden">
        <ul className="flex items-center justify-between gap-4 text-gray-G30">
          <li className="cursor-pointer">{t("navbar.confrences")}</li>
          <li className="cursor-pointer">
            <Link href="/training-programs">
              {t("navbar.corporate training")}
            </Link>
          </li>
          <li className="cursor-pointer">{t("navbar.blog")}</li>
          <LocaleSwitcher />
        </ul>
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
