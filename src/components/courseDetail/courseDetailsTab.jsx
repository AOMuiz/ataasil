import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Curriculum from "./curriculum";
import Image from "next/image";
import ownerIcon from "/public/assets/images/owner.png";

const CourseDetailsTab = ({ curriculum, course }) => {
  console.log(course);
  return (
    <Tabs.Root className="col-span-2 flex-1" dir="rtl" defaultValue={"tab1"}>
      <Tabs.List
        className="mb-3 flex shrink-0 gap-6"
        aria-label="Course Detail"
        defaultValue={"overview"}
      >
        <Tabs.Trigger
          className="bg flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center rounded-md px-5 text-[15px] font-medium leading-none text-[#A8A8A8] outline-none first:rounded-tl-md last:rounded-tr-md hover:text-neutral-500 data-[state=active]:bg-primary-P300 data-[state=inactive]:bg-gray-G20 data-[state=active]:text-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="overview"
        >
          ملخص
        </Tabs.Trigger>
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center rounded-md  px-5 text-[15px] font-medium leading-none text-[#A8A8A8] outline-none first:rounded-tl-md last:rounded-tr-md hover:text-neutral-500 data-[state=active]:bg-primary-P300 data-[state=inactive]:bg-gray-G20 data-[state=active]:text-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="curriculum"
        >
          مقرر
        </Tabs.Trigger>
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center rounded-md px-5 text-[15px] font-medium leading-none text-[#A8A8A8] outline-none first:rounded-tl-md last:rounded-tr-md hover:text-neutral-700 data-[state=active]:bg-primary-P300 data-[state=inactive]:bg-gray-G20 data-[state=active]:text-white data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="instructor"
        >
          معلم
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="overview"
      >
        <div>
          <p className="mb-3 text-2xl font-medium">تفصيل</p>
        </div>
        <p>{course && course.description}</p>
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="curriculum"
      >
        <Curriculum curriculum={curriculum} />
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md  bg-white  outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="instructor"
      >
        <div className="space-y-2 rounded-md bg-[#35CCBC33] p-5">
          <div className="flex  items-center gap-2 ">
            <Image src={ownerIcon} alt="" />
            <p className="text-xl font-semibold">
              {course?.teacher && course?.teacher.username}
            </p>
          </div>

          <div>
            <p className="font-bold">Phd in Hadith and Islamic Studies</p>
            <p className="text-lg">
              هو بلا واحدة المارق مشاركة, زهاء ماذا الحكم دون بل. كلا قد مارد
              بمباركة, بها من سنغافورة استراليا،. كانت الأول الأرضية ثم كلا, عدد
              من جدول وجهان. لم يتم بحشد العالم الكونجرس. بحث وقرى وقوعها، بـ,
              حيث هنا؟ واحدة الإحتفاظ أي. حاول لفشل للإتحاد دار مع, كلّ فبعد
              حكومة الهجوم هو. الدمج استبدال ان وصل. وحرمان بالجانب الأوروبيّون
              عل فعل, تجهيز الإكتفاء الدولارات قد قبل, في اليابان العمليات بها.
              الشرق، الضروري وصل قد, إذ ومن الشمل والحزب العصبة. و لكل أراض
              بلاده, عن الستار اعتداء مهمّات هذا. هُزم إبّان الساحل لمّ ما. ٣٠
              ليركز تكاليف بالولايات دون.
            </p>
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default CourseDetailsTab;
