import React from "react";
import Icon from "./Icon/Icon";
import Link from "next/link";
import { getFirstLetters } from "../utils/helpers";
import { useReactiveVar } from "@apollo/client";
import { profileDetailsVar } from "../graphql/state";

const UserIconName = () => {
  const { username } = useReactiveVar(profileDetailsVar);
  const letters = getFirstLetters(username);

  let firstLetter = letters[0] ? letters[0] : "";
  let seccondLetter = letters[1] ? letters[1] : "";

  return (
    <div className="flex cursor-pointer items-center gap-4 ">
      <Link href="/dashboard">
        <p className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-P300 text-center  text-xl font-bold uppercase">
          {letters.length ? `${firstLetter}${seccondLetter}` : null}
        </p>
      </Link>
      <Link href="/dashboard">
        <div className="flex items-center">
          <p className="capitalize">{username}</p>
          <Icon id={"chevron-down"} className="px-3" size={25} />
        </div>
      </Link>
    </div>
  );
};

export default UserIconName;
