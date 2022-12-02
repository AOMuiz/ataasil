import ProfileLayout from "../../layout/profileLayout";
import SectionHeader from "../../components/SectionHeader";
import CourseCard from "../../components/CourseCards/CourseCard";
import SectionCategory from "../../components/CourseCards/SectionCategory";
import Icon from "../../components/Icon";
import SectionDivider from "../../components/SectionDivider";

const Profile = () => {
  return (
    <section className="py-12">
      <div className="mb-20">
        <p className="text-2xl my-6">مرحبا عبد الله</p>
        <p className="text-lg text-gray-G30">
          لست مسجلًا في أي برنامج تدريبي حتى الآن. بإمكانك الاختيار من قائمة
          البرامج التدريبية أدناه، المقترحة لك حسب اهتماماتك.
        </p>
      </div>
      <div>
        <SectionHeader title={"المنتجات المقترحة"} />
        <SectionDivider />
        <div className="w-min">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 overflow-x-auto">
              <SectionCategory content={"التوحيد الإسلامي"} active />
              <SectionCategory content={"التوحيد الإسلامي"} />
              <SectionCategory content={"التوحيد الإسلامي"} />
            </div>
            <p className="flex gap-3 items-center text-primary-P300 text-lg">
              عرض الكل
              <Icon id={"left"} />
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto py-2">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
          <div>
            <div className="flex gap-2 flex-row-reverse py-10">
              <Icon
                id={"left"}
                color={"white"}
                size={25}
                className="bg-[#35CCBC80] p-3 rounded-md h-12 w-12 cursor-pointer"
              />
              <Icon
                id={"right"}
                color={"white"}
                size={25}
                className="bg-[#35CCBC] p-3 rounded-md h-12 w-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Profile.PageLayout = ProfileLayout;

export default Profile;
