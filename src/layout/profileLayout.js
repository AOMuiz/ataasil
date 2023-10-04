import { useEffect } from "react";
import Sidebar from "../components/Profile/Sidebar";
import useGetProfile from "../hooks/useGetProfile";
import { useReactiveVar } from "@apollo/client";
import { profileDetailsVar } from "../graphql/state";

const ProfileLayout = ({ children }) => {
  return (
    <div className="flex h-full">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex-1 px-6">{children}</main>
    </div>
  );
};

export default ProfileLayout;
