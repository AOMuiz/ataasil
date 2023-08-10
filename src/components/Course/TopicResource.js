import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { useReactiveVar } from "@apollo/client";
import { presentCourseFileDetail } from "../../graphql/state";

const TopicResource = ({ topicFile }) => {
  const courseDataFile = useReactiveVar(presentCourseFileDetail);
  const [active, setActive] = useState(false);

  const setPresentFile = () => {
    presentCourseFileDetail({
      ...courseDataFile,
      ...{
        fileType: topicFile.format,
        fileUrl: topicFile.src,
        fileTitle: topicFile.title,
        fileDescription: topicFile.description,
      },
    });
    setActive(true);
  };

  const activeClassName = "border-primary-P100 border-[3px]  animate-pulse";

  useEffect(() => {
    console.log(courseDataFile);
  }, [courseDataFile]);

  const getIconName = (type) => {
    switch (type) {
      case "Video":
        return (
          <Icon
            id="play"
            className={`rounded-full text-gray-G30 group-hover:text-primary-P100`}
          />
        );
      case "test":
        return (
          <Icon
            id="lock"
            className={`text-gray-G30 group-hover:text-primary-P100`}
          />
        );
      case "Document":
        return (
          <Icon
            id="FileText"
            // color="#5A5A5A"
            className={`text-gray-G30 group-hover:text-primary-P100`}
          />
        );
    }
  };

  return (
    <>
      <li
        onClick={() => setPresentFile()}
        className="group flex cursor-pointer items-center justify-between gap-4 border-b border-gray-G20 pb-4"
      >
        {getIconName(topicFile?.format)}
        {<span>{topicFile?.title}</span>}
        <span className="font-bold">01:30</span>
      </li>
    </>
  );
};

export default TopicResource;
