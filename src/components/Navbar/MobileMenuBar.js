import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import Icon from "../Icon";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

const MobileMenuBar = () => {
  const { t } = useTranslation("index");
  useLockBodyScroll();

  return (
    <div className="absolute left-0 right-0 z-10 h-screen bg-gray-200 bg-opacity-5 transition-all">
      <div className="space-y-5 bg-white p-5 px-7 shadow-sm">
        <div className="space-y-3">
          <LocaleSwitcher />
          <button className="w-full rounded-full bg-gray-200 py-3 px-6 text-center text-gray-900">
            <Link href={"login"}>
              <span className="flex items-center justify-center gap-3">
                <Icon id={"lock"} size={20} className="text-gray-400" />
                {t("navbar.sign in")}
              </span>
            </Link>
          </button>
          <button className="w-full cursor-pointer rounded-full bg-primary-P300 py-3 px-6 text-center text-white">
            <Link href={"signup"}>{t("navbar.sign up")}</Link>
          </button>
        </div>
        <ul className="space-y-4">
          <li className="w-full cursor-pointer">
            <Link href="/">
              <p className="flex items-center gap-2">
                <span className="rounded-md bg-primary-P600 p-1">
                  <Icon
                    as={"span"}
                    id={"star"}
                    size={20}
                    className=" text-white"
                  />
                </span>
                <span className="flex flex-1 items-center justify-between">
                  كلية القرآن وعلومه
                  <Icon
                    as={"span"}
                    id={"left"}
                    size={20}
                    className="text-gray-400"
                  />
                </span>
              </p>
            </Link>
          </li>
          <li className="w-full cursor-pointer">
            <Link href="/">
              <p className="flex items-center gap-2">
                <span className="rounded-md bg-primary-P600 p-1">
                  <Icon
                    as={"span"}
                    id={"star"}
                    size={20}
                    className=" text-white"
                  />
                </span>
                <span className="flex flex-1 items-center justify-between">
                  كلية القرآن وعلومه
                  <Icon
                    as={"span"}
                    id={"left"}
                    size={20}
                    className="text-gray-400"
                  />
                </span>
              </p>
            </Link>
          </li>
          <li className="w-full cursor-pointer">
            <Link href="/">
              <p className="flex items-center gap-2">
                <span className="rounded-md bg-primary-P600 p-1">
                  <Icon
                    as={"span"}
                    id={"star"}
                    size={20}
                    className=" text-white"
                  />
                </span>
                <span className="flex flex-1 items-center justify-between">
                  كلية القرآن وعلومه
                  <Icon
                    as={"span"}
                    id={"left"}
                    size={20}
                    className="text-gray-400"
                  />
                </span>
              </p>
            </Link>
          </li>
          <li className="w-full cursor-pointer">
            <Link href="/">
              <p className="flex items-center gap-2">
                <span className="rounded-md bg-primary-P600 p-1">
                  <Icon
                    as={"span"}
                    id={"star"}
                    size={20}
                    className=" text-white"
                  />
                </span>
                <span className="flex flex-1 items-center justify-between">
                  كلية القرآن وعلومه
                  <Icon
                    as={"span"}
                    id={"left"}
                    size={20}
                    className="text-gray-400"
                  />
                </span>
              </p>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5 text-2xl text-[#D5D5D5]">
          <Icon id={"youtube"} className="cursor-pointer" />
          <Icon id={"facebook"} className="cursor-pointer" />
          <Icon id={"instagram"} className="cursor-pointer" />
          <Icon id={"twitter"} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuBar;
