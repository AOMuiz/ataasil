import React from "react";
import Icon from "./Icon/Icon";
import Link from "next/link";
import { getFirstLetters } from "../utils/helpers";

const UserIconName = ({ username }) => {
  const letters = getFirstLetters(username);

  return (
    <div className="flex items-center gap-4">
      <p className="rounded-full bg-primary-P300 p-4 text-center font-bold uppercase">
        <Link href="/dashboard">
          {letters ? `${letters[0]}${letters[1]}` : "AS"}
        </Link>
      </p>
      <div className="flex items-center">
        <p className="capitalize"> {username}</p>
        <Icon id={"chevron-down"} className="px-3" size={25} />
      </div>
    </div>
  );
};

export default UserIconName;
