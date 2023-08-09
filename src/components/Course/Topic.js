import React from "react";
import TopicResource from "./TopicResource";
import Icon from "../Icon/Icon";
import { useReactiveVar } from "@apollo/client";
import { presentCourseDataVar } from "../../graphql/state";

const Topic = () => {
  const courseData = useReactiveVar(presentCourseDataVar);

  return (
    <ul className="space-y-5 text-lg text-gray-G30">
      <TopicResource />
      {courseData?.map((sections, i) => (
        <div key={sections._id}>
          <div className="mb-2 flex items-center justify-between gap-2 bg-[#DCECF3] px-3 py-3 font-bold text-gray-G30">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
              {i + 1}
            </span>
            <p>{sections?.title}</p>
            <Icon
              id="chevron-up"
              as="span"
              className="rounded-full border-[2px] border-gray-G30"
              size={27}
            />
          </div>
          <ul className="space-y-3">
            {sections.files.map((sectionFile) => (
              <TopicResource topicFile={sectionFile} key={sectionFile.title} />
            ))}
          </ul>
        </div>
      ))}
    </ul>
  );
};

export default Topic;
