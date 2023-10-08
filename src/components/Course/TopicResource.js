import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { useReactiveVar } from "@apollo/client";
import { presentCourseFileDetail } from "../../graphql/state";
import { cn } from "../../utils/helpers";

const TopicResource = ({ topicFile }) => {
  const courseDataFile = useReactiveVar(presentCourseFileDetail);
  const [active, setActive] = useState("");

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
  };

  useEffect(() => {
    setActive(courseDataFile.fileTitle);
  }, [active, courseDataFile.fileTitle, courseDataFile.fileType]);

  const getIconName = (type) => {
    switch (type) {
      case "Video":
        return (
          <Icon
            id={topicFile?.title === active ? "play" : "video"}
            className={cn(
              "rounded-full text-gray-G30 group-hover:text-primary-P100",
              topicFile?.title === active &&
                topicFile?.format === "Video" &&
                "animate-pulse border-[3px] border-primary-P100"
            )}
          />
        );
      case "test":
        return (
          <Icon
            id="lock"
            className={cn(
              `text-gray-G30 group-hover:text-primary-P100`,
              topicFile?.title === active &&
                topicFile?.format === "test" &&
                iconActiveClassName
            )}
          />
        );
      case "Document":
        return (
          <Icon
            id="FileText"
            className={cn(
              "text-gray-G30 group-hover:text-primary-P100",
              topicFile?.title === active &&
                topicFile?.format === "Document" &&
                "animate-pulse text-primary-P100"
            )}
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
        {
          <span
            className={cn(topicFile?.title === active && "text-primary-P200")}
          >
            {topicFile?.title}
          </span>
        }
        <span className="font-bold">01:30</span>
      </li>
    </>
  );
};

export default TopicResource;
