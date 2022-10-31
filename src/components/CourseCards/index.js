import React from "react";
import CourseCard from "./coursecard";
import SectionTitle from "./sectiontitle";
import SectionCategory from "./sectioncategory";
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
      <div tw="flex gap-3 justify-center">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div>
        <CourseNav />
      </div>
    </div>
  );
};

export default CourseCards;
