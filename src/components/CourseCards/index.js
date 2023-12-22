import React, { useState } from "react";
import CourseCard from "./CourseCard";
import SectionCategory from "./SectionCategory";
import Icon from "../Icon";
import useTranslation from "next-translate/useTranslation";
import SectionHeader from "../SectionHeader";
import useFetchCourses from "../../hooks/useFetchCourses";
import CourseCardPulse from "./CourseCardPulse";

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
];

const CourseCards = () => {
  const { t } = useTranslation("index");
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });
  const [data, error, loading] = useFetchCourses({ pagination });
  const pulseArray = new Array(4).fill(1);
  return (
    <div className="flex w-full flex-col bg-neutral-N20 px-20 py-10 pt-28 2md:px-10 2md:py-20 md:px-6">
      <div>
        <SectionHeader title={t("coursecards.main topic")} />
      </div>
      <div className="flex gap-4 overflow-x-auto">
        <SectionCategory content={t("coursecards.section title")} active />
        <SectionCategory content={"حديث"} />
        <SectionCategory content={"فقه"} />
        <SectionCategory content={"اللغة العربية"} />
      </div>
      <section>
        <div className="flex gap-6 overflow-x-auto py-2">
          {loading &&
            pulseArray.map((course, i) => <CourseCardPulse key={i} />)}
          {data &&
            data.courses.map((course) => (
              <CourseCard
                key={course._id}
                id={course._id}
                title={course.title}
                category={course.category}
                description={course.description}
                banner={course.banner}
                teacher={course.teacher.username}
                price={course.price}
                hasAccess={course.hasAccess}
              />
            ))}
          {error && <h3>Error Fetching courses. Please refresh.</h3>}
        </div>
        <div>
          <div className="flex flex-row-reverse gap-2 py-10">
            <Icon
              id={"left"}
              color={"white"}
              size={25}
              className="h-12 w-12 cursor-pointer rounded-md bg-[#35CCBC80] p-3"
            />
            <Icon
              id={"right"}
              color={"white"}
              size={25}
              className="h-12 w-12 rounded-md bg-[#35CCBC] p-3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCards;
