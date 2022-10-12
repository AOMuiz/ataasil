import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
  FaFacebookF,
} from "react-icons";
import Icon from "./Icon";

const Navbar = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation("navbar");
  return (
    <>
      <nav className="bg-white flex px-8 font-bold justify-between py-3 border-b-2 border-gray-400 items-baseline">
        <div className="flex justify-between gap-4 text-gray-700 items-baseline">
          <p>{t("Join us")}</p>
          <p>{t("corporate training")}</p>
          <p>{t("blog")}</p>
          <div className="inline-flex bg-white border rounded-md ">
            <span className="px-4 py-1 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md">
              {locale === "ar" ? "العربية" : "English"}
            </span>

            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute start-0 z-10 w-56 mt-3 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                <div className="p-2">
                  {locales.map((loc) => (
                    <span
                      key={loc}
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                      <Link
                        activeClassName={locale === loc}
                        href={asPath}
                        locale={loc}
                      >
                        {loc}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p>العربية</p>
        </div>
        <div className="flex gap-4 text-gray-400">
          <p>Icon 1</p>
          <p>Icon 2</p>
          <p>Icon 3</p>
          <p>Icon 4</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
