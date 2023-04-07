import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import tw, { styled } from "twin.macro";
import CtaButton from "../CtaButton";
import Icon from "../Icon/Icon";

const Sidebar = () => {
  return (
    <div className="max-w-sm bg-gray-50 py-2 md:mt-2 md:max-w-full">
      <Tabs.Root dir="rtl" className="TabsRoot " defaultValue="tab1">
        <Tabs.List
          className="TabsList flex justify-between gap-4 border-b border-gray-300 px-4 px-5 text-lg"
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
        <Tabs.Content className="TabsContent" value="tab1">
          <div className="flex items-center gap-3 border-b-2 border-gray-200 py-3 px-5">
            <p className="h-16 w-16 rounded-full bg-[#EA9F0080]"></p>
            أ. فواز بن متعب الهباس
          </div>
          <div className="py-3 px-5">
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
        <Tabs.Content className="TabsContent space-y-4 py-3 px-5" value="tab2">
          <p className=" flex items-center justify-between ">
            <p className="items-center rounded-md border border-gray-G30 p-2 ">
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
              className="flex items-center rounded-md border border-gray-G30 p-2 text-primary-P300 "
            />
          </p>
          <h6 className="text-2xl text-gray-G30">القائمة</h6>
          <ul className="space-y-5 text-lg text-gray-G30">
            <li className="flex items-center justify-between">
              <Icon id="play" /> <span>مقدمة عن البرنامج</span>
              <span>01:30</span>
            </li>
            <li className="flex items-center justify-between">
              <Icon id="lock" /> <span>مقدمة عن البرنامج</span>
              <span>01:30</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon id="FileText" />
              <span>هدف البرنامج</span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                1
              </span>
              <span>التدريب الأول: ماهية مقدمة عن البرنامج</span>
              <Icon
                id="chevron-up"
                as="span"
                className="rounded-full border border-gray-G30 "
              />
            </li>
            <li className="flex items-center justify-between">
              <Icon id="video" /> <span>مقدمة عن البرنامج</span>
              <span>01:30</span>
            </li>
            <li className="flex items-center justify-between">
              <Icon id="lock" /> <span>مقدمة عن البرنامج</span>
              <span>01:30</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon id="FileText" />
              <span>هدف البرنامج</span>
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content className="TabsContent space-y-4 p-3" value="tab3">
          <ul className="space-y-3">
            <li className="flex items-center gap-4 rounded-lg bg-white p-3 shadow-md">
              <p className="h-16 w-16 rounded-lg bg-[#EA9F0080]"></p>
              <p>
                شكراً على المحتوى والجهد. شكراً على المحتوى والجهد. شكراً على
                المحتوى والجهد. شكراً على المحتوى والجهد. شكراً على المحتوى
                والجهد. شكراً على المحتوى والجهد. شكراً على المحتوى والجهد.
              </p>
            </li>
            <li className="flex items-center gap-4 rounded-lg bg-white p-3 shadow-md">
              <p className="h-16 w-16 rounded-lg bg-[#EA9F0080]"></p>
              <p>
                شكراً على المحتوى والجهد. شكراً على المحتوى والجهد. شكراً على
                المحتوى والجهد. شكراً على المحتوى والجهد. شكراً على المحتوى
                والجهد. شكراً على المحتوى والجهد. شكراً على المحتوى والجهد.
              </p>
            </li>
            <li className="flex items-center gap-4 rounded-lg bg-white p-3 shadow-md">
              <p className="h-16 w-16 rounded-lg bg-[#EA9F0080]"></p>
              <p>
                شكراً على المحتوى والجهد. شكراً على المحتوى والجهد. شكراً على
                المحتوى والجهد. شكراً على المحتوى والجهد. شكراً على المحتوى
                والجهد. شكراً على المحتوى والجهد. شكراً على المحتوى والجهد.
              </p>
            </li>
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
