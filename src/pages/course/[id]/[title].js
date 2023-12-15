import { useEffect, useState } from "react";
import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";

import { COURSES_SECTIONS, COURSE } from "../../../graphql/queries/courses";
import Icon from "../../../components/Icon";
import CourseDetailsTab from "../../../components/courseDetail/courseDetailsTab";
import DetailsCard from "../../../components/courseDetail/detailsCard";
import Spinner from "../../../components/spinner";
import { presentCourseFileDetail } from "../../../graphql/state";
import PreviewModal from "../../../components/courseDetail/PreviewModal";

const Index = () => {
  const { query } = useRouter();
  const courseDataFile = useReactiveVar(presentCourseFileDetail);
  const [preview, setPreview] = useState(false);

  const [
    getSections,
    { data: courseSection, error: courseSectionError, loading },
  ] = useLazyQuery(COURSES_SECTIONS, {
    onCompleted: (data) => console.log({ courseSectionData: data }),
    onError: (error) => console.log({ courseSectionError: error }),
  });

  const [
    getCourse,
    { data: courseDetail, error: courseDetailError, loading: courseloading },
  ] = useLazyQuery(COURSE, {
    onCompleted: (data) => console.log({ courseData: data }),
    onError: (error) => console.log({ courseError: error }),
  });

  useEffect(() => {
    getCourse({ variables: { courseId: query.id } });
    getSections({ variables: { courseId: query.id } });
  }, [getCourse, getSections, query.id]);

  if (courseloading)
    return (
      <div className="h-screen p-10">
        <Spinner />
      </div>
    );

  if (courseDetailError)
    return `Fetching Data error! ${courseDetailError.message}`;

  return (
    <main>
      <div className="min-h-screen">
        <section className="space-y-5 bg-slate-900 px-10 py-10 text-white">
          <h1 className="text-3xl font-bold text-white">
            {courseDetail?.course.title}
          </h1>
          <p>{courseDetail?.course.description}</p>
          <div className="flex items-center gap-2">
            <Icon id={"teacher"} size="20" />
            <p className="">
              مدرس{" "}
              <span className="text-primary-P600">
                {courseDetail?.course.teacher.username}
              </span>
            </p>
          </div>
          <div className="flex gap-5 ">
            <div className="flex items-center gap-2">
              <Icon id={"calender"} size="20" />
              <p>آخر تحديث {courseDetail?.course.createdAt}</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon id={"student"} size="20" />
              <p>طلاب {courseDetail?.course.studentCount}</p>
            </div>
          </div>
        </section>
        <section className="mt-2 grid h-full grid-cols-3 gap-5 p-10">
          <CourseDetailsTab
            curriculum={courseSection}
            course={courseDetail?.course}
          />
          <DetailsCard courseDetail={courseDetail} />
        </section>
      </div>

      <PreviewModal />
    </main>
  );
};

export default Index;
