import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";
import NavItem from "./NavItem";

const sideMenu = [
  {
    slug: "/profile",
    label: "نظرة عامة",
    icon: "home",
  },
  {
    slug: "/profile/settings",
    label: "إعدادات الحساب",
    icon: "user",
  },
  {
    slug: "/profile/certificates",
    label: "الشهادات",
    icon: "certificate",
  },
  {
    slug: "/profile/purchases",
    label: "المشتريات السابقة",
    icon: "dollar",
  },
  {
    slug: "/profile/dashboard",
    label: "المنتجات",
    icon: "dashboard",
    subnav: [
      {
        label: "البرامج التدريبية",
        slug: "/profile/dashboard",
        icon: "",
      },
      {
        label: "المؤتمرات الإلكترونية",
        slug: "/profile/dashboard/webinars",
        icon: "",
      },
      {
        label: "الإضاءات الإثرائية",
        slug: "/profile/dashboard/knowledge-enrichment",
      },
      {
        label: "المسارات التدريبية",
        slug: "/profile/dashboard/tracks",
      },
    ],
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
    slug: "/profile/bookmarks",
    label: "الإشارات المرجعية",
    icon: "bookmark",
  },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-neutral-N20 basis-[20vw] py-6 h-full">
      <div className="flex justify-center items-center my-3 mx-2">
        <p className="bg-primary-P300 h-12 w-12 rounded-full text-center flex justify-center text-3xl font-semibold">
          ع
        </p>
        <p className="text-lg font-bold my-4 mx-4">عبد الله عبد الرحمان</p>
      </div>
      <ul className="flex flex-col gap-4">
        {sideMenu.map((item, key) => (
          <NavItem
            key={`${item.label}-${key}`}
            item={item}
            active={router.pathname === item.slug}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
