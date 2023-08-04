import Image from "next/image";
import React from "react";
import masjid from "/public/assets/images/masjid.png";
import SectionCategory from "../../components/CourseCards/SectionCategory";
import UnstyledButton from "../../components/UnstyledButton/UnstyledButton";
import Icon from "../../components/Icon/Icon";
import CourseCard from "../../components/CourseCards/CourseCard";

const TrainingPrograms = () => {
  return (
    <main>
      <section className="flex items-center justify-between bg-neutral-N20 py-14 px-20">
        <h1 className="text-5xl font-bold">البرامج التدريبية</h1>
        <div>
          <Image src={masjid} alt="" />
        </div>
      </section>
      <section className="py-10 px-20">
        <h2 className="text-3xl font-bold"> فئة الموضوع</h2>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <SectionCategory active content={"الكل"} />
            <SectionCategory content={"للمبتدئين"} />
            <SectionCategory content={"للمحترفين"} />
          </div>
          <div className="flex items-center justify-between gap-4">
            <UnstyledButton>
              <Icon
                id={"options"}
                size={24}
                className="rounded-full bg-gray-G20 p-2"
                color="#5A5A5A"
              />
            </UnstyledButton>
            <UnstyledButton>
              <Icon
                id={"sort"}
                size={24}
                className="rounded-full bg-gray-G20 p-2"
                color="#5A5A5A"
              />
            </UnstyledButton>
          </div>
        </div>
        <section className="my-10 grid grid-cols-4 gap-8 lg:grid-cols-3 2md:grid-cols-2 sm:grid-cols-1">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </section>
      </section>
    </main>
  );
};

export default TrainingPrograms;
