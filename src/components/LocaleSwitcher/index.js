import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const LocaleSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [isListOpen, setIsListOpen] = useState(false);
  const onChangeLanguage = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <div>
      <div className="inline-flex bg-white border rounded-md ">
        <span className="px-4 py-1 hover:text-gray-700 hover:bg-gray-50 rounded-l-md flex">
          {locale === "ar" ? "العربية" : "English"}
        </span>
        <div className="relative">
          <button
            onClick={onChangeLanguage}
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
          <div
            className={`absolute start-0 z-10 w-56 mt-3 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${
              isListOpen ? "block" : "hidden"
            }`}
          >
            <div className="p-2" aria-labelledby="dropdown">
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
    </div>
  );
};

export default LocaleSwitcher;
