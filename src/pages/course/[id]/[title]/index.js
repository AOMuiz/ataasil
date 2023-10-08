import React, { useEffect } from "react";
import Image from "next/image";
import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import ReactPlayer from "react-player/lazy";
import dynamic from "next/dynamic";

import player from "/public/assets/images/vid-player.png";
import { COURSES_SECTIONS } from "../../../../graphql/queries/courses";
import Sidebar from "../../../../components/Course/Sidebar";
import CtaButton from "../../../../components/CtaButton";
import {
  presentCourseDetailVar,
  presentCourseFileDetail,
} from "../../../../graphql/state";

const SinglePage = dynamic(
  () => import("../../../../components/Pdf/SinglePage"),
  {
    ssr: false,
  }
);

const Index = () => {
  const { query } = useRouter();
  const courseSectionData = useReactiveVar(presentCourseDetailVar);
  const courseDataFile = useReactiveVar(presentCourseFileDetail);
  const [getCourseSection, { data, error, loading }] = useLazyQuery(
    COURSES_SECTIONS,
    {
      onCompleted: (data) => onGetCourseSectionComplete(data),
      onError: (error) => console.log({ error, pagination }),
    }
  );

  const onGetCourseSectionComplete = (data) => {
    presentCourseDetailVar([...data.course_getSections]);
    console.log({
      coursesSection: data,
      courseSectionData,
      error,
    });
  };

  useEffect(() => {
    if (query.id) {
      getCourseSection({ variables: { courseId: query.id } });
    }
    console.log({ query, courseDataFile });
  }, [query, courseDataFile]);

  useEffect(() => {
    presentCourseFileDetail({});
  }, []);

  return (
    <div className="flex md:flex-col">
      <div className="h-full flex-1">
        {(courseDataFile.fileUrl === "" ||
          Object.keys(courseDataFile).length === 0) && (
          <div className="h-full">
            <Image src={player} alt="player thumbnail" layout="responsive" />
          </div>
        )}
        {courseDataFile.fileType === "Document" && (
          <SinglePage pdf={courseDataFile.fileUrl} />
        )}

        {courseDataFile.fileType === "Video" && (
          <div className="aspect-video w-full leading-none">
            <ReactPlayer
              controls
              url={
                courseDataFile.fileUrl
                  ? courseDataFile.fileUrl
                  : "https://www.youtube.com/watch?v=hrxL31QubZQ"
              }
              width="100%"
              height="100%"
            />
          </div>
        )}
        <div className="flex justify-between gap-3 bg-white p-4 md:flex-col">
          <div className="space-y-4">
            {/* <p className="text-2xl font-bold">{courseSectionData[0]?.title}</p> */}
            <p className="text-2xl font-bold">
              {courseDataFile?.fileTitle
                ? courseDataFile?.fileTitle
                : courseSectionData[0]?.title}
            </p>
            <p className="flex gap-3 font-semibold">
              <span>عدد التقييمات 30544</span>
              <span className="h-full w-[2px] text-gray-500"></span>
              <span>عدد المتدربين المسجلين 106585</span>
            </p>
          </div>
          <div className="space-y-4">
            <CtaButton>إضافة الى السلة (100 ر.س)</CtaButton>
            <p>* شاملا ضريبة القيمة المضافة</p>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Index;
