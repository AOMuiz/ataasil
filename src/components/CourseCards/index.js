import React, { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import CourseCard from "./CourseCard";
import SectionCategory from "./SectionCategory";
import Icon from "../Icon";
import useTranslation from "next-translate/useTranslation";
import SectionHeader from "../SectionHeader";
import useFetchCourses from "../../hooks/useFetchCourses";
import CourseCardPulse from "./CourseCardPulse";

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
      <Splide
        hasTrack={false}
        options={{
          direction: "rtl",
          gap: "1rem",
          drag: true,
          snap: true,
          autoHeight: true,
          fixedWidth: "270px",
        }}
      >
        <SplideTrack className="gap-6 py-2">
          {loading &&
            pulseArray.map((course, i) => <CourseCardPulse key={i} />)}
          {data &&
            data.courses.map((course) => (
              <SplideSlide key={course._id}>
                <CourseCard
                  id={course._id}
                  title={course.title}
                  category={course.category}
                  description={course.description}
                  banner={course.banner}
                  teacher={course.teacher.username}
                  price={course.price}
                  // hasAccess={course.hasAccess}
                />
              </SplideSlide>
            ))}
          {error && <h3>Error Fetching courses. Please refresh.</h3>}
        </SplideTrack>
        <div>
          <div className="splide__arrows flex flex-row-reverse gap-2 py-10">
            <button className="splide_arrow splide__arrow--next">
              <Icon
                id={"left"}
                color={"white"}
                size={25}
                className="h-12 w-12 cursor-pointer rounded-md bg-[#35CCBC80] p-3 "
              />
            </button>
            <button className="splide_arrow splide__arrow--prev">
              <Icon
                id={"right"}
                color={"white"}
                size={25}
                className="h-12 w-12 rounded-md bg-[#35CCBC] p-3"
              />
            </button>
          </div>
        </div>
      </Splide>
    </div>
  );
};

export default CourseCards;
