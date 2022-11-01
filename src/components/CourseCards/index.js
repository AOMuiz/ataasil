import React from "react";
import CourseCard from "./coursecard";
import SectionCategory from "./sectioncategory";
import Icon from "../Icon";
import useTranslation from "next-translate/useTranslation";

const CourseCards = () => {
  const { t } = useTranslation("index");
  return (
    <div tw="flex flex-col bg-neutral-N30 w-full py-10">
      <div tw="px-20">
        <p tw="text-3xl	font-bold">{t("coursecards.main topic")}</p>
      </div>
      <div tw="flex gap-6 px-20">
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
      </div>
      <section>
        <div tw="flex gap-6 px-20">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div tw="px-20">
          <div tw="flex gap-2 flex-row-reverse py-10">
            <Icon
              id={"left"}
              color={"white"}
              size={25}
              tw=" bg-[#35CCBC80] p-3 rounded-md h-12 w-12 cursor-pointer"
            />
            <Icon
              id={"right"}
              color={"white"}
              size={25}
              tw="bg-[#35CCBC] p-3 rounded-md h-12 w-12"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCards;
