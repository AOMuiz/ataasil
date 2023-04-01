export const sideMenu = [
  {
    slug: "/dashboard",
    label: "نظرة عامة",
    icon: "home",
  },
  {
    slug: "/dashboard/settings",
    label: "إعدادات الحساب",
    icon: "user",
  },
  {
    slug: "/dashboard/certificates",
    label: "الشهادات",
    icon: "certificate",
  },
  {
    slug: "/dashboard/purchases",
    label: "المشتريات السابقة",
    icon: "dollar",
  },
  {
    slug: "/dashboard/programs",
    label: "المنتجات",
    icon: "dashboard",
    subnav: [
      {
        label: "البرامج التدريبية",
        slug: "/dashboard/programs",
        icon: "",
      },
      {
        label: "المؤتمرات الإلكترونية",
        slug: "/dashboard/webinars",
        icon: "",
      },
      {
        label: "الإضاءات الإثرائية",
        slug: "/dashboard/knowledge-enrichment",
      },
      {
        label: "المسارات التدريبية",
        slug: "/dashboard/tracks",
      },
    ],
  },
  {
    slug: "/dashboard/notifications",
    label: "الإشعارات",
    icon: "bell",
  },
  {
    slug: "/dashboard/favorites",
    label: "المفضلة",
    icon: "favorite",
  },
  {
    slug: "/dashboard/bookmarks",
    label: "الإشارات المرجعية",
    icon: "bookmark",
  },
];
