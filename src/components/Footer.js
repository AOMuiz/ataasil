import LogoDark from "./Svg/LogoDark";
import Image from "next/image";
import Icon from "./Icon";
import googleplay from "/public/assets/images/googleplay.png";
import appstore from "/public/assets/images/appstore.png";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation("index");
  return (
    <section className="bg-[#3A3B50] px-20 py-10">
      <div className="grid grid-flow-col-dense gap-8 pb-5">
        <div>
          <Link href={"/"} passHref={true}>
            <LogoDark />
          </Link>
          <p className="my-3 text-white">{t("footer.download app")}</p>
          <div className="flex gap-3">
            <Image src={googleplay} alt="googleplay" />
            <Image src={appstore} alt="appstore" />
          </div>
        </div>
        <div className="text-lg text-white">
          <p className="mb-4 font-bold">{t("footer.about links.heading")}</p>
          <ul>
            <li className="cursor-pointer pb-1">
              <Link href={"/contact"}>{t("footer.about links.connect")}</Link>
            </li>
            <li className="cursor-pointer pb-1">
              <Link href={"/about"}>{t("footer.about links.about us")}</Link>
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
          <p className="mb-4 font-bold">{t("footer.support.heading")}</p>
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
          <p className="w-auto text-lg font-bold text-white">
            {t("footer.newsletter.title")}
          </p>
          <div className="relative my-6 h-14">
            <input
              type="text"
              placeholder="أدخل عنوان بريدك الإلكتروني"
              className="h-full w-full rounded-l-full outline-none placeholder:py-2 placeholder:px-4"
            />
            <button className="absolute left-0 -bottom-7 h-full -translate-y-1/2 rounded-full bg-primary-P300 px-5 text-xl text-white">
              {t("footer.newsletter.join")}
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 text-xl text-white">
            <p className="text-lg">{t("footer.socials")}</p>
            <Icon id={"youtube"} className="cursor-pointer text-2xl" />
            <Icon id={"linkedIn"} className="cursor-pointer text-2xl" />
            <Icon id={"facebook"} className="cursor-pointer text-2xl" />
            <Icon id={"instagram"} className="cursor-pointer text-2xl" />
            <Icon id={"twitter"} className="cursor-pointer text-2xl" />
          </div>
        </div>
      </div>
      <div>
        <div className="border border-white"></div>
        <p className="mt-5 text-center text-lg text-white">
          {t("footer.copyright")}
          <span>&#169;</span> 2022
        </p>
      </div>
    </section>
  );
};

export default Footer;
