import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import tw, { styled } from "twin.macro";
import { MdTranslate } from "react-icons/md";

const LocaleSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [isListOpen, setIsListOpen] = useState(false);
  const onChangeLanguage = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <div>
      <div className="inline-flex bg-white hover:bg-gray-50">
        <button
          onClick={onChangeLanguage}
          className="flex items-center gap-1 rounded-l-md px-2 py-1  hover:text-gray-700"
        >
          <MdTranslate /> {locale === "ar" ? "العربية" : "English"}
        </button>
        <div className="relative">
          <button
            onClick={onChangeLanguage}
            type="button"
            className="inline-flex h-full items-center justify-center rounded-md px-1 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            <div className="p-2" aria-labelledby="dropdown">
              {locales.map((loc) => (
                <Link
                  activeClassName={locale === loc}
                  href={asPath}
                  locale={loc}
                  key={loc}
                >
                  <span className="block content-start rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
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
  isListOpen ? tw`block` : tw`hidden`,
  tw`absolute z-10 w-56 mt-3 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg text-align[start]`,
]);
