import React from "react";
import Icon from "./Icon/Icon";
import Link from "next/link";

const UserIconName = () => {
  return (
    <div className="flex items-center gap-4">
      <p className="rounded-full bg-primary-P300 p-4 text-center font-bold">
        <Link href="/dashboard">AS</Link>
      </p>
      <div className="flex items-center">
        <p>عبد الله ...</p>
        <Icon id={"chevron-down"} className="px-3" size={25} />
      </div>
    </div>
  );
};

export default UserIconName;
