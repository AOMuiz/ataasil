import React from "react";
import LogoDark from "./Svg/LogoDark";
import Image from "next/image";
import Icon from "./Icon";
import googleplay from "/public/assets/images/googleplay.png";
import appstore from "/public/assets/images/appstore.png";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t } = useTranslation("index");
  return (
    <section className="bg-[#3A3B50] px-20 py-10">
      <div className="grid grid-flow-col-dense pb-5 gap-8">
        <div>
          <LogoDark />
          <p className="text-white my-3">{t("footer.download app")}</p>
          <div className="flex gap-3">
            <Image src={googleplay} alt="googleplay" />
            <Image src={appstore} alt="appstore" />
          </div>
        </div>
        <div className="text-white text-lg">
          <p className="font-bold mb-4">{t("footer.about links.heading")}</p>
          <ul>
            <li className="cursor-pointer pb-1">
              {t("footer.about links.connect")}
            </li>
            <li className="cursor-pointer pb-1">
              {t("footer.about links.about us")}
            </li>
            <li className="cursor-pointer pb-1">
              {t("footer.about links.Join us")}
            </li>
            <li className="cursor-pointer pb-1">
              {t("footer.about links.appointment")}
            </li>
          </ul>
        </div>
        <div className="text-lg text-white">
          <p className="font-bold mb-4">{t("footer.support.heading")}</p>
          <ul>
            <li className="cursor-pointer pb-1">
              {t("footer.support.help center")}
            </li>
            <li className="cursor-pointer pb-1">
              {t("footer.support.privacy")}
            </li>
            <li className="cursor-pointer pb-1">
              {t("footer.support.circumstance")}
            </li>
            <li className="cursor-pointer pb-1">
              {t("footer.support.user guide")}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-bold text-lg w-auto">
            {t("footer.newsletter.title")}
          </p>
          <div className="relative my-6 h-14">
            <input
              type="text"
              placeholder="أدخل عنوان بريدك الإلكتروني"
              className="h-full outline-none placeholder:py-2 placeholder:px-4 w-full rounded-l-full"
            />
            <button className="bg-primary-P300 px-5 rounded-full text-white absolute left-0 -bottom-7 -translate-y-1/2 text-xl h-full">
              {t("footer.newsletter.join")}
            </button>
          </div>
          <div className="flex gap-3 text-white text-xl items-center justify-center">
            <p className="text-lg">{t("footer.socials")}</p>
            <Icon id={"youtube"} className="text-2xl cursor-pointer" />
            <Icon id={"linkedIn"} className="text-2xl cursor-pointer" />
            <Icon id={"facebook"} className="text-2xl cursor-pointer" />
            <Icon id={"instagram"} className="text-2xl cursor-pointer" />
            <Icon id={"twitter"} className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div>
        <div className="border border-white"></div>
        <p className="text-lg text-center text-white mt-5">
          {t("footer.copyright")}
          <span>&#169;</span> 2022
        </p>
      </div>
    </section>
  );
};

export default Footer;
