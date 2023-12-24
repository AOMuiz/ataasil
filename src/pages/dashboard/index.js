import tw from "twin.macro";
import { useReactiveVar, useQuery } from "@apollo/client";
import { useState } from "react";

import { profileDetailsVar } from "../../graphql/state";
import CourseCardPulse from "../../components/CourseCards/CourseCardPulse";
import ProfileLayout from "../../layout/profileLayout";
import SectionHeader from "../../components/SectionHeader";
import CourseCard from "../../components/CourseCards/CourseCard";
import SectionCategory from "../../components/CourseCards/SectionCategory";
import Icon from "../../components/Icon";
import SectionDivider from "../../components/SectionDivider";
import { COURSES_SUBSCRIBED } from "../../graphql/queries/courses";

const Profile = () => {
  const profileDetails = useReactiveVar(profileDetailsVar);
  const pulseArray = new Array(4).fill(1);
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });
  const [filter, setFilter] = useState({
    category: null,
    title: null,
  });
  const { data, error, loading } = useQuery(COURSES_SUBSCRIBED, {
    variables: { pagination: { ...pagination }, filter: { ...filter } },
    onCompleted: (data) => console.log({ courses: data }),
    onError: (error) => console.log({ error, pagination }),
  });
  return (
    <Container>
      <div className="mb-20">
        <p className="my-6 text-2xl capitalize">
          مرحبا {profileDetails.username}
        </p>
        <p className="text-lg text-gray-G30">
          لست مسجلًا في أي برنامج تدريبي حتى الآن. بإمكانك الاختيار من قائمة
          البرامج التدريبية أدناه، المقترحة لك حسب اهتماماتك.
        </p>
      </div>
      <div>
        <SectionHeader title={"المنتجات المقترحة"} />
        <SectionDivider />
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 overflow-x-auto">
              <SectionCategory content={"التوحيد الإسلامي"} active />
              <SectionCategory content={"التوحيد الإسلامي"} />
              <SectionCategory content={"التوحيد الإسلامي"} />
            </div>
            <p className="flex items-center gap-3 text-lg text-primary-P300">
              عرض الكل
              <Icon id={"left"} />
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto py-2 md:flex-wrap">
            {loading &&
              pulseArray.map((course, i) => <CourseCardPulse key={i} />)}
            {data &&
              data.courses_subscribed.map((course) => (
                <CourseCard
                  key={course._id}
                  id={course._id}
                  title={course.title}
                  category={course.category}
                  description={course.description}
                  banner={course.banner}
                  teacher={course.teacher.username}
                  price={course.price}
                  hasAccess={course.hasAccess}
                  progress={course.progress}
                />
              ))}
            {error && <h3>Error Fetching courses. Please refresh.</h3>}
          </div>
          <div>
            <div className="flex flex-row-reverse gap-2 py-10">
              <Icon
                id={"left"}
                color={"white"}
                size={25}
                className="h-12 w-12 cursor-pointer rounded-md bg-[#35CCBC80] p-3"
              />
              <Icon
                id={"right"}
                color={"white"}
                size={25}
                className="h-12 w-12 rounded-md bg-[#35CCBC] p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

Profile.PageLayout = ProfileLayout;

export default Profile;

export const Container = tw.section`py-12 px-2 h-full`;
