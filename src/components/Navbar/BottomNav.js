import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import CtaButton from "../CtaButton";
import Icon from "../Icon";
import Logo from "../Svg/Logo";
import DesktopMenuBar from "./DesktopMenuBar";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

const BottomNav = ({ auth = false }) => {
  const { t } = useTranslation("index");

  return (
    <div className="relative flex items-center justify-between px-20 py-5 shadow-sm 2md:hidden">
      <div className="flex items-center gap-6">
        <Link href={"/"} passHref legacyBehavior>
          <a>
            <Logo width={80} height={60} className="cursor-pointer" />
          </a>
        </Link>
        <div className="flex h-auto cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-primary-P300 py-2 px-3">
          <span>
            <Icon id={"menu"} />
          </span>
          <span className="text-black">{t("navbar.menu")}</span>
        </div>
      </div>
      <div className="flex h-auto w-auto basis-1/3 items-center overflow-hidden rounded-full bg-gray-G20">
        <Icon id={"search"} className="px-3 text-primary-P300" size={20} />
        <input
          type="text"
          className="h-full w-full bg-gray-G20 py-3 outline-none placeholder:py-1 placeholder:font-light placeholder:text-black"
          placeholder={t("navbar.search placeholder")}
        />
      </div>

      {auth ? (
        // {/* show this if user is authenticated */}
        <div className="flex items-center gap-10">
          <ul className="flex gap-5 text-[#D5D5D5]">
            <li>
              <BsCart3 size={30} />
            </li>
            <li className="h-[30px] w-[2px] bg-[#D5D5D5]"></li>
            <li>
              <AiOutlineHeart size={30} />
            </li>
            <li>
              <IoNotificationsOutline size={30} />
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <p className="rounded-full bg-primary-P300 p-4 text-center font-bold">
              AS
            </p>
            <p className="flex items-center">
              عبد الله ...
              <Icon id={"chevron-down"} className="px-3" size={25} />
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-evenly gap-6 font-bold">
          <p className="cursor-pointer text-gray-G30">
            <Link href={"login"}>{t("navbar.sign in")}</Link>
          </p>
          {/* <p className="w-auto cursor-pointer rounded-full  bg-primary-P300 px-6 py-3 text-center text-white">
        {t("navbar.sign up")}
      </p> */}
          <CtaButton>
            <Link href={"signup"}>{t("navbar.sign up")}</Link>
          </CtaButton>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
