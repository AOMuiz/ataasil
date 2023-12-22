import React, { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
// import * as Accordion from '@radix-ui/react-accordion';

import TopicResource from "./TopicResource";
import Icon from "../Icon/Icon";
import {
  presentCourseDetailVar,
  presentCourseFileDetail,
  presentCourseSectionTest,
} from "../../graphql/state";
import { cn } from "../../utils/helpers";

const Topic = () => {
  const courseData = useReactiveVar(presentCourseDetailVar);
  const courseDataFile = useReactiveVar(presentCourseFileDetail);
  const courseSectionTest = useReactiveVar(presentCourseSectionTest);

  return (
    <div>
      {courseData?.map((sections, i) => (
        <div key={sections._id}>
          <div className="mb-4 flex items-center  gap-3 bg-[#DCECF3] px-3 py-3 font-bold text-gray-G30">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full bg-white p-2",
                (sections._id === courseDataFile.sectionId ||
                  sections._id === courseSectionTest.sectionId) &&
                  "bg-primary-P300 text-white"
              )}
            >
              {i + 1}
            </span>
            <p className="me-auto">{sections?.title}</p>
            <Icon
              id="chevron-up"
              as="span"
              className="self-end rounded-full border-[2px] border-gray-G30"
              size={27}
            />
          </div>
          <ul className="space-y-3 px-5">
            {sections.files.map((sectionFile) => (
              <TopicResource
                topicFile={sectionFile}
                key={sectionFile.title}
                sectionId={sections._id}
                format={"file"}
              />
            ))}
            {sections.test && (
              <TopicResource
                format={"test"}
                sectionId={sections._id}
                testDetail={sections.test}
              />
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Topic;
