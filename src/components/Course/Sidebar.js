import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { useReactiveVar } from "@apollo/client";

import Icon from "../Icon/Icon";
import ownerIcon from "/public/assets/images/edit_fill.png";
import { presentCourseDataVar } from "../../graphql/state";
import Topic from "./Topic";
import { reviews } from "./data";

const Sidebar = () => {
  const courseData = useReactiveVar(presentCourseDataVar);

  return (
    <div className="max-w-sm bg-gray-50 py-2 md:mt-2 md:max-w-full">
      <Tabs.Root dir="rtl" className="TabsRoot " defaultValue="tab1">
        <Tabs.List
          className="TabsList flex justify-between gap-4 border-b border-gray-300  px-5 text-lg"
          aria-label="Manage your account"
        >
          <TabsTrigger className="TabsTrigger" value="tab1">
            نظرة عامة
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="tab2">
            المحتوى
          </TabsTrigger>
          <TabsTrigger className="TabsTrigger" value="tab3">
            الآراء
          </TabsTrigger>
        </Tabs.List>
        <Tabs.Content className="" value="tab1">
          <div className="flex items-center gap-3 border-b-2 border-gray-200 px-5 py-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EA9F0080]">
              <Image src={ownerIcon} alt="" height={40} width={40} />
            </div>
            أ. فواز بن متعب الهباس
          </div>
          <div className="px-5 py-3">
            <p className="my-3 font-bold">نظرة عامة</p>
            <p className="text-lg">
              تكمن أهمية اكتساب المتدربين لمهارات بناء ثقافة تنظيمية فعالة في
              جميع المنظمات فيما يلي: • تمنح الموظفين هوية وتساعدهم على فهم
              متطلبات المنظمة. • تعمل على تشجيع الالتزام الجماعي والاستقرار
              الاجتماعي. • تعتبر كدليل للقادة بالمنظمة والعاملين بها بحيث تشكل
              لهم نماذج سلوكية يجب إتباعها. • تهيئة إطار فكري وتنظيمي لتوجيه
              أفراد المنظمة.
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content className="space-y-4 px-5 py-3" value="tab2">
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
        <Tabs.Content className="TabsContent space-y-4 p-3" value="tab3">
          <ul className="space-y-3">
            {reviews.map((content, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-lg bg-white p-3 shadow-md"
              >
                <div className="h-16 min-w-[64px] rounded-lg bg-[#EA9F0080]"></div>
                <div>
                  <div className="mb-1 flex justify-between">
                    <div className="flex gap-1">
                      <Icon id={"star"} className="text-amber-500" />
                      <Icon id={"star"} className="text-amber-500" />
                      <Icon id={"star"} className="text-amber-500" />
                      <Icon id={"star"} className="text-amber-500" />
                    </div>
                    <p className="font-bold text-gray-G30">{content.date}</p>
                  </div>
                  <p>{content.reviewText}</p>
                </div>
              </li>
            ))}
          </ul>
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
