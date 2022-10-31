import React from "react";
import Icon from "../Icon";

const CourseNav = () => {
  return (
    <div tw="flex gap-2 flex-row-reverse px-60 py-8">
      <div tw=" bg-[#35CCBC80] p-3 rounded-md h-12 w-12 cursor-pointer">
        <Icon id={"left"} color={"white"} size={25} />
      </div>
      <div tw="bg-[#35CCBC] p-3 rounded-md h-12 w-12">
        <Icon id={"right"} color={"white"} size={25} />
      </div>
    </div>
  );
};

export default CourseNav;
