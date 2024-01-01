import React from "react";
import Icon from "../Icon";

const SummaryCard = ({ title, amount, iconName }) => {
  return (
    <div className="flex-1 rounded-md p-4 shadow-md">
      <div className="mb-4 flex justify-between gap-7">
        <p className="text-lg font-semibold">{title}</p>
        <div className="h-fit rounded-md bg-black p-2">
          <Icon id={iconName} className="text-white" size={20} />
        </div>
      </div>
      <p className="text-gray-400">{amount}</p>
    </div>
  );
};

export default SummaryCard;
