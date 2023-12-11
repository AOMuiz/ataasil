import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Curriculum from "./curriculum";

const CourseDetailsTab = ({ curriculum }) => {
  return (
    <Tabs.Root className="col-span-2 flex-1" dir="rtl" defaultValue={"tab1"}>
      <Tabs.List
        className="mb-3 flex shrink-0 gap-6"
        aria-label="Course Detail"
        defaultValue={"tab1"}
      >
        <Tabs.Trigger
          className="bg flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center rounded-md px-5 text-[15px] font-medium leading-none text-[#A8A8A8] outline-none first:rounded-tl-md last:rounded-tr-md hover:text-neutral-500 data-[state=active]:bg-primary-P300 data-[state=inactive]:bg-gray-G20 data-[state=active]:text-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="tab1"
        >
          ملخص
        </Tabs.Trigger>
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center rounded-md  px-5 text-[15px] font-medium leading-none text-[#A8A8A8] outline-none first:rounded-tl-md last:rounded-tr-md hover:text-neutral-500 data-[state=active]:bg-primary-P300 data-[state=inactive]:bg-gray-G20 data-[state=active]:text-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="tab2"
        >
          مقرر
        </Tabs.Trigger>
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center rounded-md px-5 text-[15px] font-medium leading-none text-[#A8A8A8] outline-none first:rounded-tl-md last:rounded-tr-md hover:text-neutral-700 data-[state=active]:bg-primary-P300 data-[state=inactive]:bg-gray-G20 data-[state=active]:text-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="tab3"
        >
          معلم
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab1"
      >
        <div>
          <p className="mb-3 text-lg font-medium">تفصيل</p>
        </div>
        <p>
          مئات للأراضي و وفي, تمهيد الأمور فعل بـ, فشكّل والحزب محاولات فعل عل.
          ويعزى فرنسية الإتفاقية لكل أي. كل منتصف غينيا الاندونيسية ومن, بأيدي
          وصافرات الأرضية أي وتم, لان من إجلاء وحلفاؤها الدنمارك. بعد ان وقرى
          المزيفة, الغالي بقيادة بحث عل. يتسنّى واشتدّت و كلّ. كل مقاومة العسكري
          وفي. غير بـ جمعت هناك بالولايات, ان ومضى سبتمبر مشاركة لكل. لم الذود
          انتباه دون. فكان وبولندا تم ومن, حول طوكيو اليها هو.
        </p>
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab2"
      >
        <Curriculum curriculum={curriculum} />
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab3"
      >
        <p>Tab Three</p>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default CourseDetailsTab;
