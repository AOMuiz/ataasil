import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

import Icon from "../Icon";
import Logo from "../Svg/Logo";
import MobileMenuBar from "./MobileMenuBar";
import { BsCart3 } from "react-icons/bs";

const MobileNav = () => {
  const { t } = useTranslation("index");
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="relative hidden 2md:block">
      <div className="flex items-center justify-between gap-3 px-10 py-3 shadow-sm md:px-5">
        <div className="flex items-center gap-6">
          <Link href={"/"} passHref legacyBehavior>
            <a>
              <Logo
                width={80}
                height={60}
                className="h-16 w-20 cursor-pointer"
                sizes="100vw"
              />
            </a>
          </Link>
        </div>
        <div className="flex h-auto w-auto basis-2/3  items-center overflow-hidden rounded-full bg-gray-G20 md:flex-1">
          <Icon id={"search"} className="px-3 text-primary-P300" size={20} />
          <input
            type="text"
            className="h-full w-full bg-gray-G20 py-3 outline-none placeholder:py-1 placeholder:font-light placeholder:text-black"
            placeholder={t("navbar.search placeholder")}
          />
        </div>
        <button className="text-[#D5D5D5]">
          <BsCart3 size={30} />
        </button>
        <button
          type="button"
          onClick={handleShowNav}
          className="flex h-auto cursor-pointer items-center justify-center rounded-md border-2 border-primary-P300 bg-primary-P300  px-2 py-2"
        >
          <span>
            <Icon id={showNav ? "cancel" : "menu"} />
          </span>
        </button>
      </div>
      {showNav && <MobileMenuBar />}
    </nav>
  );
};

export default MobileNav;
