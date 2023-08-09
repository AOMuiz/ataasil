import React from "react";
import Icon from "../Icon/Icon";

const TopicResource = ({ topicFile }) => {
  const getIconName = (type) => {
    switch (type) {
      case "Video":
        return <Icon id="play" color="#5A5A5A" />;
      case "test":
        return <Icon id="lock" color="#5A5A5A" />;
      case "Document":
        return <Icon id="FileText" color="#5A5A5A" />;
    }
  };

  return (
    <>
      <li className="flex cursor-pointer items-center justify-between gap-4 border-b border-gray-G20 pb-4">
        {getIconName(topicFile?.format)}
        {<span>{topicFile?.title}</span>}
        <span className="font-bold">01:30</span>
      </li>
    </>
  );
};

export default TopicResource;
