import React from "react";
import CourseCard from "./coursecard";
import SectionTitle from "./sectiontitle";
import SectionCategory from "./sectioncategory";
import Icon from "../Icon";
import CourseNav from "./coursenav";

const CourseCards = () => {
  return (
    <div tw="flex flex-col bg-neutral-N30 w-full py-10">
      <div tw="px-60">
        <SectionTitle />
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
          <div tw="flex gap-2 flex-row-reverse px-60 py-8">
            <div tw=" bg-[#35CCBC80] p-3 rounded-md h-12 w-12 cursor-pointer">
              <Icon id={"left"} color={"white"} size={25} />
            </div>
            <div tw="bg-[#35CCBC] p-3 rounded-md h-12 w-12">
              <Icon id={"right"} color={"white"} size={25} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCards;
