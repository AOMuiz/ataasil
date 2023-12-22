import React, { useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { useReactiveVar } from "@apollo/client";

import Icon from "../Icon/Icon";
import ownerIcon from "/public/assets/images/edit_fill.png";
import {
  presentCourseDetailVar,
  presentCourseFileDetail,
} from "../../graphql/state";
import Topic from "./Topic";
import { cn } from "../../utils/helpers";

const Sidebar = () => {
  const courseData = useReactiveVar(presentCourseDetailVar);

  useEffect(() => {
    if (courseData.length > 0) {
      presentCourseFileDetail({
        sectionId: courseData[0]?._id,
        fileType: courseData[0]?.files[0].format,
        fileUrl: courseData[0]?.files[0].src,
        fileTitle: courseData[0]?.files[0].title,
        fileDescription: courseData[0]?.files[0].description,
      });
    }
  }, [courseData]);

  return (
    <Tabs.Root
      dir="rtl"
      className={cn(
        "min-w-[300px] max-w-sm bg-gray-50 py-2 md:mt-2 md:min-w-full"
      )}
      defaultValue="overview"
    >
      <Tabs.List
        className="TabsList flex justify-evenly gap-4 border-b border-gray-300  px-5 text-lg"
        aria-label="View Course"
      >
        <TabsTrigger className="TabsTrigger" value="overview">
          نظرة عامة
        </TabsTrigger>
        <TabsTrigger className="TabsTrigger" value="course-content">
          المحتوى
        </TabsTrigger>
      </Tabs.List>
      <Tabs.Content className="w-full" value="overview">
        <div className="space-y-2 px-5 py-3">
          <div className="flex items-center gap-3 border-b-2 border-gray-200 pb-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EA9F0080]">
              <Image src={ownerIcon} alt="" height={40} width={40} />
            </div>
            أ. فواز بن متعب الهباس
          </div>
          <div className="border-b-2 border-gray-200 pb-2">
            <p className="font-bold">Phd in Hadith and Islamic Studies</p>
            <p className="text-md">
              هو بلا واحدة المارق مشاركة, زهاء ماذا الحكم دون بل. كلا قد مارد
              بمباركة, بها من سنغافورة استراليا،. كانت الأول الأرضية ثم كلا, عدد
              من جدول وجهان. لم يتم بحشد العالم الكونجرس. بحث وقرى وقوعها، بـ,
              حيث هنا؟ واحدة الإحتفاظ أي. حاول لفشل للإتحاد دار مع, كلّ فبعد
              حكومة الهجوم هو
            </p>
          </div>
        </div>

        <div className="border-b-2 border-gray-200 px-5 py-3">
          <p className="my-3 font-bold">نظرة عامة</p>
          <div className="space-y-3">
            <p>
              <em className="font-bold">ملاحظات: </em>
              {courseData[0]?.notes}
            </p>
            <p>
              <em className="font-bold">بيان مختصر: </em>
              {courseData[0]?.description}
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 px-5 py-3">
          <ul className="w-2/3 space-y-3">
            <li className="flex justify-between gap-4">
              <span className="font-bold">المدة</span>
              <span>01h 01m</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="font-bold">تاريخ النشر</span>
              <span>03/11/2019</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="font-bold">المستوى</span>
              <span>{courseData[0]?.category}</span>
            </li>
          </ul>
        </div>
        <div className="px-5 py-3">
          <p className="font-bold">مشاركة عبر :</p>
          <ul className="mt-6 flex gap-4">
            <li className="rounded-full bg-primary-P200 p-2">
              <Icon
                id={"youtube"}
                className="cursor-pointer text-2xl text-white"
              />
            </li>
            <li className="rounded-full bg-primary-P200 p-2">
              <Icon
                id={"linkedIn"}
                className="cursor-pointer text-2xl text-white"
              />
            </li>
            <li className="rounded-full bg-primary-P200 p-2">
              <Icon
                id={"facebook"}
                className="cursor-pointer text-2xl text-white"
              />
            </li>
            <li className="rounded-full bg-primary-P200 p-2">
              <Icon
                id={"instagram"}
                className="cursor-pointer text-2xl text-white"
              />
            </li>
            <li className="rounded-full bg-primary-P200 p-2">
              <Icon
                id={"twitter"}
                className="cursor-pointer text-2xl text-white"
              />
            </li>
          </ul>
        </div>
      </Tabs.Content>
      <Tabs.Content className="w-full space-y-4  py-3" value="course-content">
        <p className="flex items-center justify-between px-5 ">
          <p className="items-center rounded-md border border-gray-G30 p-2">
            <Icon as="span" id={"greater-than"} className="text-primary-P300" />
          </p>
          <span className="text-lg text-gray-500">مقدمة عن البرنامج</span>
          <Icon
            as="span"
            id={"less-than"}
            className="flex items-center rounded-md border border-gray-G30 p-2 text-primary-P300"
          />
        </p>
        <h6 className="my-6 px-5 text-2xl text-gray-G30">القائمة</h6>
        <Topic />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default Sidebar;

const TabsTrigger = styled(Tabs.Trigger)`
  ${tw`font-bold text-gray-400 py-3`}

  &[data-state="active"] {
    ${tw` text-primary-P400`}
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
  }
`;
