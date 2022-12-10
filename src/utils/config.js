export const sideMenu = [
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
