import React from "react";
import CourseCard from "./CourseCard.js";
import SectionCategory from "./SectionCategory.js";
import Icon from "../Icon";
import useTranslation from "next-translate/useTranslation";
import SectionHeader from "../SectionHeader";

const CourseCards = () => {
  const { t } = useTranslation("index");
  return (
    <div className="flex flex-col bg-neutral-N20 w-full py-10 px-20 pt-28">
      <div>
        <SectionHeader title={t("coursecards.main topic")} />
      </div>
      <div className="flex gap-4">
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
        <SectionCategory />
      </div>
      <section>
        <div className="flex gap-6">
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
