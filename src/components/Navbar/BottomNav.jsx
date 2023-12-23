import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useReactiveVar } from "@apollo/client";
import { AiOutlineHeart } from "react-icons/ai";

import CtaButton from "../CtaButton";
import Icon from "../Icon";
import Logo from "../Svg/Logo";
import DesktopMenuBar from "./DesktopMenuBar";
import { isLoggedIn } from "../../utils/auth";
import UserIconName from "../UserIconName";
import { profileDetailsVar, cartItemsVar } from "../../graphql/state";
import { useEffect } from "react";
import { useGetCart } from "../../hooks/useCart";
import PopoverDemo from "../popover";
import Image from "next/image";

const BottomNav = () => {
  const { t } = useTranslation("index");
  const profileDetails = useReactiveVar(profileDetailsVar);
  const courseFromCartData = useReactiveVar(cartItemsVar);
  // const {authenticated} = useReactiveVar(authStateVar);
  const auth = isLoggedIn();
  const [cartData, error, loading] = useGetCart();

  return (
    <div className="relative flex items-center justify-between px-20 py-5 shadow-sm 2md:hidden">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <a>
            <Logo width={80} height={60} className="cursor-pointer" />
          </a>
        </Link>
        <div className="flex h-auto cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-primary-P300 px-3 py-2">
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
      {/* show this if user is authenticated */}
      {auth ? (
        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-5 text-[#D5D5D5]">
            <li className="relative cursor-pointer">
              {courseFromCartData && courseFromCartData.length > 0 && (
                <span className="absolute -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-center text-sm text-white">
                  {courseFromCartData.length}
                </span>
              )}
              <PopoverDemo
                trigger={
                  <button
                    aria-label="Cart overview"
                    className="flex"
                    disabled={loading}
                  >
                    <Icon id="cart" size={30} />
                  </button>
                }
              >
                <div className="mt-8">
                  <p className="mb-2.5 border-b-2 border-[#E7E7E7] px-4 pb-3 text-lg font-medium leading-[19px]">
                    سلّة التسوق
                  </p>
                  {courseFromCartData.length <= 0 ? (
                    <p className="mx-4">Cart is empty</p>
                  ) : (
                    <div className="border-b-2 border-[#E7E7E7] pb-2">
                      <div className="mx-4 grid gap-4">
                        {courseFromCartData?.slice(0, 3).map((course) => (
                          <div className="flex gap-2.5" key={course?._id}>
                            <Image
                              src={course?.banner}
                              height={78}
                              width={80}
                              alt="course banner"
                              className="rounded-lg"
                            />
                            <div className="flex flex-col gap-1">
                              <p className="text-lg font-light">
                                {course?.title}
                              </p>
                              <p className="text-gray-500">
                                {course?.teacher.username}
                              </p>
                              <p className="text-md font-bold">
                                {course?.price} ر.س
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mx-4 mt-3">
                  <Link href="/cart">
                    <a>
                      <button className="w-full cursor-pointer rounded-lg bg-primary-P300 px-6 py-2 text-center text-white">
                        التفاصيل
                      </button>
                    </a>
                  </Link>
                </div>
              </PopoverDemo>
            </li>
            <li className="h-[30px] w-[2px] bg-[#D5D5D5]">{""}</li>
            <li className="cursor-pointer">
              <Link href="/">
                <a>
                  <AiOutlineHeart size={30} />
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
