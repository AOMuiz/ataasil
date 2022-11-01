import React from "react";
import CourseCard from "./coursecard";
import SectionCategory from "./sectioncategory";
import Icon from "../Icon";
import useTranslation from "next-translate/useTranslation";

const CourseCards = () => {
  const { t } = useTranslation("index");
  return (
    <div tw="flex flex-col bg-neutral-N30 w-full py-10">
      <div tw="px-60">
        <div tw="text-3xl	font-bold">{t("coursecards.main topic")}</div>
      </div>
      <div tw="flex gap-3 justify-center">
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
      </div>
      <section>
        <div tw="flex gap-3 justify-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div>
          <div tw="flex gap-2 flex-row-reverse">
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
