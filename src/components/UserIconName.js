import React from "react";
import Icon from "./Icon/Icon";
import Link from "next/link";
import { getFirstLetters } from "../utils/helpers";
import { useReactiveVar } from "@apollo/client";
import { profileDetailsVar } from "../graphql/state";

const UserIconName = () => {
  const { username } = useReactiveVar(profileDetailsVar);
  const letters = getFirstLetters(username);

  // console.log({ letters, username });
  let firstLetter = letters[0] ? letters[0] : "";
  let seccondLetter = letters[1] ? letters[1] : "";

  return (
    <div className="flex items-center gap-4">
      <Link href="/dashboard" className="cursor-pointer">
        <p className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-P300 text-center  text-2xl font-bold uppercase">
          {letters.length ? `${firstLetter}${seccondLetter}` : null}
        </p>
      </Link>
      <div className="flex items-center">
        <p className="capitalize">{username}</p>
        <Icon id={"chevron-down"} className="px-3" size={25} />
      </div>
    </div>
  );
};

export default UserIconName;
