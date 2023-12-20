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
    <div className="max-w-sm bg-gray-50 py-2 md:mt-2 md:max-w-full">
      <Tabs.Root dir="rtl" className="TabsRoot" defaultValue="tab1">
        <Tabs.List
          className="TabsList flex justify-evenly gap-4 border-b border-gray-300  px-5 text-lg"
          aria-label="Manage your account"
        >
          <TabsTrigger className="TabsTrigger" value="tab1">
            نظرة عامة
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="tab2">
            المحتوى
          </TabsTrigger>
        </Tabs.List>
        <Tabs.Content className="min-w-[150px]" value="tab1">
          <div className="flex items-center gap-3 border-b-2 border-gray-200 px-5 py-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EA9F0080]">
              <Image src={ownerIcon} alt="" height={40} width={40} />
            </div>
            أ. فواز بن متعب الهباس
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
        <Tabs.Content
          className="min-w-[150px] space-y-4 px-5 py-3"
          value="tab2"
        >
          <p className=" flex items-center justify-between ">
            <p className="items-center rounded-md border border-gray-G30 p-2">
              <Icon
                as="span"
                id={"greater-than"}
                className="text-primary-P300"
              />
            </p>
            <span className="text-lg text-gray-500">مقدمة عن البرنامج</span>
            <Icon
              as="span"
              id={"less-than"}
              className="flex items-center rounded-md border border-gray-G30 p-2 text-primary-P300"
            />
          </p>
          <h6 className="my-6 text-2xl text-gray-G30">القائمة</h6>
          <Topic />
        </Tabs.Content>
      </Tabs.Root>
    </div>
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
