import Image from "next/image";
import React, { useState, useEffect } from "react";
import masjid from "/public/assets/images/masjid.png";
import SectionCategory from "../../components/CourseCards/SectionCategory";
import UnstyledButton from "../../components/UnstyledButton/UnstyledButton";
import Icon from "../../components/Icon/Icon";
import CourseCard from "../../components/CourseCards/CourseCard";
import tw, { styled } from "twin.macro";
import useFetchCourses from "../../hooks/useFetchCourses";
import CourseCardPulse from "../../components/CourseCards/CourseCardPulse";
import Pagination from "../../components/Pagination";
import { COURSES_COUNT } from "../../graphql/queries/courses";
import { useQuery } from "@apollo/client";

const TrainingPrograms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });
  const [filter, setFilter] = useState({
    category: null,
    title: null,
  });

  const [data, error, loading] = useFetchCourses({ pagination });
  const { data: countData } = useQuery(COURSES_COUNT, {
    variables: { filter },
    onCompleted: (data) => {
      setTotalCourses(data?.courses_count);
      console.log({ courses: data, totalCourses });
    },
  });
  const pulseArray = new Array(4).fill(1);

  const handlePageChange = (page) => {
    if (page === "next") {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (page === "prev") {
      setCurrentPage((prevPage) => prevPage - 1);
    } else {
      setCurrentPage(page);
    }
  };

  // useEffect(() => {
  //   if (countData) {
  //     setTotalCourses(countData?.courses_count); // Update totalCourses with count from the server
  //   }
  // }, [countData]);

  return (
    <main>
      <section className="flex items-center justify-between gap-10 bg-neutral-N20 px-20 py-14 sm:flex-wrap sm:px-14">
        <h1 className="text-5xl font-bold">البرامج التدريبية</h1>
        <div>
          <Image src={masjid} alt="" />
        </div>
      </section>
      <section className="px-20 py-10 sm:px-14">
        <h2 className="text-3xl font-bold">فئة الموضوع</h2>
        <div className="flex justify-between sm:flex-wrap">
          <div className="flex gap-5 sm:w-full sm:overflow-auto">
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
        <CourseList>
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
              />
            ))}
        </CourseList>
        {totalCourses < pagination.limit ? null : (
          <Pagination
            totalPages={totalCourses / pagination.limit}
            currentPage={pagination.page}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </main>
  );
};

export default TrainingPrograms;

const CourseList = styled.section(({}) => [
  tw`my-10 grid gap-8 `,
  `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); `,
]);
