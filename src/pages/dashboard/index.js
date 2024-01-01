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
import SummaryCard from "../../components/dashboard/summaryCard";

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
        <p className="my-6 text-2xl  capitalize">
          مرحبا {profileDetails.username}
        </p>
        <div className="flex flex-wrap justify-between gap-6">
          <SummaryCard
            title={"إجمالي المسجلين"}
            iconName={"eyeOpen"}
            amount={
              data?.courses_subscribed?.length > 0
                ? data?.courses_subscribed?.length
                : "0"
            }
          />
          <SummaryCard title={"مكتمل"} iconName={"checkCircle"} amount={"0"} />
          <SummaryCard
            title={"الشهادات"}
            iconName={"certificateLight"}
            amount={"0"}
          />
        </div>
      </div>

      <div>
        <div className="flex items-start justify-between gap-4">
          <SectionHeader
            title={
              data?.courses_subscribed?.length > 0
                ? "المنتجات المشتراة"
                : "المنتجات المقترحة"
            }
          />
          <p className="flex items-center gap-3 text-lg text-primary-P300">
            عرض الكل
            <Icon id={"left"} />
          </p>
        </div>

        <SectionDivider />
        <p className="my-4 text-lg text-gray-G30">
          لست مسجلًا في أي برنامج تدريبي حتى الآن. بإمكانك الاختيار من قائمة
          البرامج التدريبية أدناه، المقترحة لك حسب اهتماماتك.
        </p>
        <div className="">
          <div className="grid grid-cols-responsive270 gap-6 py-2">
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
        </div>
      </div>
    </Container>
  );
};

Profile.PageLayout = ProfileLayout;

export default Profile;

export const Container = tw.section`py-12 px-2 h-full md:py-8 md:px-0`;
