import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import tw, { styled } from "twin.macro";

const LocaleSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [isListOpen, setIsListOpen] = useState(false);
  const onChangeLanguage = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <div>
      <div tw="inline-flex bg-white border rounded-md">
        <span tw="px-4 py-1 hover:text-gray-700 hover:bg-gray-50 rounded-l-md flex">
          {locale === "ar" ? "العربية" : "English"}
        </span>
        <div tw="relative">
          <button
            onClick={onChangeLanguage}
            type="button"
            tw="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              tw="w-4 h-4"
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
          <Dropdown isListOpen={isListOpen}>
            <div tw="p-2" aria-labelledby="dropdown">
              {locales.map((loc) => (
                <Link
                  activeClassName={locale === loc}
                  href={asPath}
                  locale={loc}
                  key={loc}
                >
                  <span tw="px-4 py-2 text-sm text-gray-500 rounded-lg block hover:bg-gray-50 hover:text-gray-700 content-start">
                    {loc}
                  </span>
                </Link>
              ))}
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default LocaleSwitcher;

const Dropdown = styled.button(({ isListOpen }) => [
  isListOpen ? tw`hidden` : tw`block`,
  tw`absolute z-10 w-56 mt-3 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg`,
]);
