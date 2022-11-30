import Link from "next/link";
import React from "react";
import tw, { styled } from "twin.macro";
import Icon from "../Icon";

const routes = [
  {
    slug: "/profile",
    label: "نظرة عامة",
    icon: "home",
  },
  {
    slug: "/profile/user",
    label: "إعدادات الحساب",
    icon: "user",
  },
  {
    slug: "/testimonials",
    label: "الشهادات",
    icon: "dollar",
  },
  {
    slug: "/profile/dashboard",
    label: "المنتجات",
    icon: "dashboard",
  },
  {
    slug: "/profile/notifications",
    label: "الإشعارات",
    icon: "bell",
  },
  {
    slug: "/profile/favorites",
    label: "المفضلة",
    icon: "favorite",
  },
  {
    slug: "/profile",
    label: "نظرة عامة",
    icon: "home",
  },
  {
    slug: "/profile/bookmark",
    label: "الإشارات المرجعية",
    icon: "bookmark",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-neutral-N20 basis-[20vw] py-6">
      <div className="flex justify-center items-center my-3">
        <p className="bg-primary-P300 h-12 w-12 rounded-full text-center flex justify-center text-3xl font-semibold">
          ع
        </p>
        <p className="text-lg font-bold my-4 mx-4">عبد الله عبد الرحمان</p>
      </div>
      <ul className="flex flex-col gap-4">
        {routes.map((item, key) => (
          <SidebarItem key={key}>
            <Link href={`${item.slug}`}>
              <span className="flex items-center gap-3">
                <Icon id={`${item.icon}`} size={35} />
                {item.label}
              </span>
            </Link>
          </SidebarItem>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

const SidebarItem = styled.li(() => [
  tw`flex gap-2 items-center text-gray-G30 py-2 px-2 border-l-4 border-l-[#016FD0] cursor-pointer`,
  `background: linear-gradient(90deg, #A6D1F7 0%, rgba(166, 209, 247, 0) 100%);
  `,
]);
