import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import CtaButton from "../CtaButton";
import Icon from "../Icon";
import Logo from "../Svg/Logo";
import DesktopMenuBar from "./DesktopMenuBar";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { isLoggedIn } from "../../utils/auth";
import UserIconName from "../UserIconName";
import { getFirstLetters } from "../../utils/helpers";
import { profileDetailsVar } from "../../graphql/state";
import { useReactiveVar } from "@apollo/client";

const BottomNav = () => {
  const { t } = useTranslation("index");
  const profileDetails = useReactiveVar(profileDetailsVar);
  const auth = isLoggedIn();

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
            <li className="cursor-pointer">
              <Link href="/" passHref legacyBehavior>
                <a>
                  <BsCart3 size={30} />
                </a>
              </Link>
            </li>
            <li className="h-[30px] w-[2px] bg-[#D5D5D5]"></li>
            <li className="cursor-pointer">
              <Link href="/">
                <a>
                  <AiOutlineHeart size={30} />
                </a>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/"} legacyBehavior>
                <a>
                  <IoNotificationsOutline size={30} />
                </a>
              </Link>
            </li>
          </ul>
          <UserIconName username={profileDetails?.username} />
        </div>
      ) : (
        <div className="flex items-center justify-evenly gap-6 font-bold">
          <p className="cursor-pointer text-gray-G30">
            <Link href={"/login"}>{t("navbar.sign in")}</Link>
          </p>
          <Link href={"/signup"} passHref legacyBehavior>
            <a>
              <CtaButton>{t("navbar.sign up")}</CtaButton>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
