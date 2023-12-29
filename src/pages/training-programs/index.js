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
import PopoverDemo from "../../components/popover";
import AppDropdownMenu from "../../components/dropdownmenu";
import Pagination from "../../components/Pagination";
import { COURSES_COUNT } from "../../graphql/queries/courses";
import { useQuery } from "@apollo/client";
import { cn } from "../../utils/helpers";
import Spinner from "../../components/spinner";

let PAGINATION_ARG = {
  limit: 10,
  page: 1,
};

const TrainingPrograms = () => {
  const [totalCourses, setTotalCourses] = useState(0);
  const [pagination, setPagination] = useState(PAGINATION_ARG);
  const [filter, setFilter] = useState({
    category: "",
    title: "",
  });
  const pulseArray = new Array(4).fill(1);

  const [data, error, loading, refetch, fetchMore] = useFetchCourses({
    pagination: PAGINATION_ARG,
    filter,
  });

  const { data: countData } = useQuery(COURSES_COUNT, {
    variables: { filter },
    onCompleted: (data) => {
      setTotalCourses(data?.courses_count);
      console.log({ courses: data, totalCourses });
    },
  });

  function handleOptionChange(e) {
    setFilter((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  }

  function handleSearchChange(e) {
    setFilter((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  }

  const handlePageChange = (page) => {
    setPagination((prev) => ({
      ...prev,
      page,
    }));
  };

  const handleFilter = (type) => {
    if (type === "filter") {
      refetch({
        pagination: { ...pagination },
        filter: { ...filter },
      });
    }

    if (type === "clear") {
      setFilter((prev) => ({
        ...prev,
        category: "",
        title: "",
      }));

      refetch({
        pagination: { ...pagination },
        filter: { category: "", title: "" },
      });
    }
  };

  useEffect(() => {
    if (countData) {
      setTotalCourses(countData?.courses_count); // Update totalCourses with count from the server
    }
  }, [countData]);

  useEffect(() => {
    fetchMore({
      variables: {
        pagination: { ...pagination },
      },
    });
    console.log({ fetchmore: data, pagination, data });
  }, [data, fetchMore, pagination]);

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

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
            <PopoverDemo
              trigger={
                <UnstyledButton>
                  <Icon
                    id={"options"}
                    size={24}
                    className="rounded-full bg-gray-G20 p-2"
                    color="#5A5A5A"
                  />
                </UnstyledButton>
              }
            >
              <div className="mt-8 px-2">
                <div className="mb-3">
                  <p>بحث</p>{" "}
                  <input
                    type="search"
                    className="rounded-sm border border-primary-P300 px-2"
                    value={filter.title}
                    onChange={handleSearchChange}
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold">نوع المؤتمر</p>
                  <div className="flex flex-col">
                    <label>
                      <input
                        checked={filter.category === ""}
                        onChange={handleOptionChange}
                        name="category-filter"
                        type="radio"
                        value=""
                        className="me-2"
                      />
                      <span>الكل</span>
                    </label>
                    <label className="space-x-2">
                      <input
                        checked={filter.category === "Arobiyyah"}
                        onChange={handleOptionChange}
                        name="category-filter"
                        type="radio"
                        value="Arobiyyah"
                        className="me-2"
                      />
                      <span>العربية</span>
                    </label>
                    <label className="space-x-2">
                      <input
                        checked={filter.category === "Hadith"}
                        onChange={handleOptionChange}
                        name="category-filter"
                        type="radio"
                        value="Hadith"
                        className="me-2"
                      />
                      الحديث
                    </label>
                    <label className="space-x-2">
                      <input
                        checked={filter.category === "Aqeedah"}
                        onChange={handleOptionChange}
                        name="category-filter"
                        type="radio"
                        value="Aqeedah"
                        className="me-2"
                      />
                      العقيدة
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    disabled={loading}
                    onClick={() => handleFilter("filter")}
                    className={cn(
                      "rounded-md bg-primary-P300 p-3 font-semibold text-white",
                      loading && "bg-gray-300 text-black"
                    )}
                  >
                    تصفية
                  </button>
                  <button
                    onClick={() => handleFilter("clear")}
                    className="rounded-md bg-neutral-400 p-3 font-semibold"
                  >
                    إعادة ضبط
                  </button>
                </div>
              </div>
            </PopoverDemo>
            <AppDropdownMenu
              trigger={
                <UnstyledButton>
                  <Icon
                    id={"sort"}
                    size={24}
                    className="rounded-full bg-gray-G20 p-2"
                    color="#5A5A5A"
                  />
                </UnstyledButton>
              }
            >
              <p>sort</p>
            </AppDropdownMenu>
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
            totalCount={totalCourses}
            pageSize={pagination.limit}
            onPageChange={handlePageChange}
            currentPage={pagination.page}
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
