import React from "react";
import Icon from "../Icon";
import SectionDivider from "../SectionDivider";

const Interests = () => {
  return (
    <div>
      <p className="text-2xl font-bold my-7">الاهتمامات</p>
      <SectionDivider />
      <div className="px-4 py-6 border-2 rounded-xl my-6">
        <ul className="flex gap-4 items-center">
          <li className="flex items-center gap-2 border rounded-full p-3 bg-gray-G20">
            التوحيد الإسلامي <Icon id={"cancel"} />
          </li>
          <li>اهتمام جديد ...</li>
        </ul>
      </div>
    </div>
  );
};

export default Interests;
