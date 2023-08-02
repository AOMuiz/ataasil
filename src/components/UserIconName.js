import React from "react";
import Icon from "./Icon/Icon";

const UserIconName = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="rounded-full bg-primary-P300 p-4 text-center font-bold">
        AS
      </p>
      <div className="flex items-center">
        عبد الله ...
        <Icon id={"chevron-down"} className="px-3" size={25} />
      </div>
    </div>
  );
};

export default UserIconName;
