import React from "react";
import SectionCategory from "../../components/CourseCards/SectionCategory";
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
      </div>
    </section>
  );
};

Certificates.PageLayout = ProfileLayout;

export default Certificates;
