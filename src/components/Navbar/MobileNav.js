import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import Icon from "../Icon";
import Logo from "../Svg/Logo";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const MobileNav = () => {
  const { t } = useTranslation("index");
  return (
    <nav className="hidden 2md:block">
      <div className="flex items-center justify-between gap-3 py-2 px-10 shadow-sm md:px-5">
        <div className="flex items-center gap-6">
          <Link href={"/"} passHref legacyBehavior>
            <a>
              <Logo
                width={80}
                height={60}
                className="h-12 w-16 cursor-pointer"
                sizes="100vw"
              />
            </a>
          </Link>
        </div>
        <div className="flex h-auto w-auto basis-1/3  items-center overflow-hidden rounded-full bg-gray-G20 2md:flex-1">
          <Icon id={"search"} className="px-3 text-primary-P300" size={20} />
          <input
            type="text"
            className="h-full w-full bg-gray-G20 py-3 outline-none placeholder:py-1 placeholder:font-light placeholder:text-black"
            placeholder={t("navbar.search placeholder")}
          />
        </div>
        <div className="flex h-auto cursor-pointer items-center justify-center gap-3 rounded-md border-2 border-primary-P300 bg-primary-P300 py-2 px-2">
          <span>
            <Icon id={"menu"} color="white" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
