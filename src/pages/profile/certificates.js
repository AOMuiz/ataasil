import React from "react";
import SectionCategory from "../../components/CourseCards/SectionCategory";
import Icon from "../../components/Icon";
import ProfileLayout from "../../layout/profileLayout";

const Certificates = () => {
  return (
    <section className="py-12">
      <div>
        <p className="font-bold text-2xl my-8">الشهادات</p>
        <div className="border-2 border-[#E7E7E7]"></div>
        <div className="flex gap-4">
          <SectionCategory content={"الكل"} active />
          <SectionCategory content={"برامج تدريبية"} />
          <SectionCategory content={"مسارات تدريبية"} />
          <SectionCategory content={"مؤتمرات إلكترونية"} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Icon
            id={"certificate"}
            size={250}
            strokeWidth={0.5}
            className="text-gray-G30 opacity-10"
          />
          <p className="text-3xl font-light text-gray-G30">لا توجد شهادات</p>
        </div>
      </div>
    </section>
  );
};

Certificates.PageLayout = ProfileLayout;

export default Certificates;
