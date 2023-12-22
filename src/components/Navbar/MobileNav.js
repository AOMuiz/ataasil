import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import Image from "next/image";

import Icon from "../Icon";
import Logo from "../Svg/Logo";
import MobileMenuBar from "./MobileMenuBar";
import { cartItemsVar } from "../../graphql/state";
import PopoverDemo from "../popover";
import { useGetCart } from "../../hooks/useCart";

const MobileNav = () => {
  const courseFromCartData = useReactiveVar(cartItemsVar);
  const { t } = useTranslation("index");
  const [showNav, setShowNav] = useState(false);
  const [loading] = useGetCart();

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="relative hidden 2md:block">
      <div className="flex items-center justify-between gap-3 px-10 py-3 shadow-sm md:px-5">
        <div className="flex items-center gap-6">
          <Link href={"/"} passHref legacyBehavior>
            <a>
              <Logo
                width={80}
                height={60}
                className="h-16 w-20 cursor-pointer"
                sizes="100vw"
              />
            </a>
          </Link>
        </div>
        <div className="flex h-auto w-auto basis-2/3  items-center overflow-hidden rounded-full bg-gray-G20 md:flex-1">
          <Icon id={"search"} className="px-3 text-primary-P300" size={20} />
          <input
            type="text"
            className="h-full w-full bg-gray-G20 py-3 outline-none placeholder:py-1 placeholder:font-light placeholder:text-black"
            placeholder={t("navbar.search placeholder")}
          />
        </div>
        <div className="relative cursor-pointer text-[#D5D5D5]">
          {courseFromCartData && courseFromCartData.length > 0 && (
            <span className="absolute -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-center text-sm text-white">
              {courseFromCartData.length}
            </span>
          )}
          <PopoverDemo
            trigger={
              <button aria-label="Cart overview" className="flex">
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
                      <div
                        className="flex gap-2.5 lg:flex-col"
                        key={course?._id}
                      >
                        <div>
                          <Image
                            src={course?.banner}
                            height={78}
                            width={80}
                            alt="course banner"
                            className="rounded-lg"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <p className="text-lg font-light">{course?.title}</p>
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
        </div>
        <button
          type="button"
          onClick={handleShowNav}
          className="flex h-auto cursor-pointer items-center justify-center rounded-md border-2 border-primary-P300 bg-primary-P300  px-2 py-2"
        >
          <span>
            <Icon id={showNav ? "cancel" : "menu"} />
          </span>
        </button>
      </div>
      {showNav && <MobileMenuBar />}
    </nav>
  );
};

export default MobileNav;
