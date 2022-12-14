import React from "react";
import CourseCard from "./CourseCard";
import SectionCategory from "./SectionCategory";
import Icon from "../Icon";
import useTranslation from "next-translate/useTranslation";
import SectionHeader from "../SectionHeader";

const courses = [
  {
    title: "كتاب التوحيد للشيخ العثيمين",
    date: "3 أشهر",
    topic: "التوحيد",
    summary:
      "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك الت",
    amount: "$120",
    owner: "الشيخ المدخلي",
  },
  {
    title: "كتاب التوحيد للشيخ العثيمين",
    date: "3 أشهر",
    topic: "التوحيد",
    summary:
      "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك الت",
    amount: "$120",
    owner: "الشيخ المدخلي",
  },
  {
    title: "كتاب التوحيد للشيخ العثيمين",
    date: "3 أشهر",
    topic: "التوحيد",
    summary:
      "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك الت",
    amount: "$120",
    owner: "الشيخ المدخلي",
  },
  {
    title: "كتاب التوحيد للشيخ العثيمين",
    date: "3 أشهر",
    topic: "التوحيد",
    summary:
      "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك الت",
    amount: "$120",
    owner: "الشيخ المدخلي",
  },
  {
    title: "كتاب التوحيد للشيخ العثيمين",
    date: "3 أشهر",
    topic: "التوحيد",
    summary:
      "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك الت",
    amount: "$120",
    owner: "الشيخ المدخلي",
  },
];

const CourseCards = () => {
  const { t } = useTranslation("index");
  return (
    <div className="flex flex-col bg-neutral-N20 w-full py-10 px-20 pt-28">
      <div>
        <SectionHeader title={t("coursecards.main topic")} />
      </div>
      <div className="flex gap-4 overflow-x-auto">
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
      </div>
      <section>
        <div className="flex gap-6 overflow-x-auto py-2">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div>
          <div className="flex gap-2 flex-row-reverse py-10">
            <Icon
              id={"left"}
              color={"white"}
              size={25}
              className="bg-[#35CCBC80] p-3 rounded-md h-12 w-12 cursor-pointer"
            />
            <Icon
              id={"right"}
              color={"white"}
              size={25}
              className="bg-[#35CCBC] p-3 rounded-md h-12 w-12"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCards;
