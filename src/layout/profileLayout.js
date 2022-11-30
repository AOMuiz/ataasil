import React from "react";
import Sidebar from "../components/Profile/Sidebar";

const ProfileLayout = ({ children }) => {
  return (
    <div className="flex h-full">
      <aside>
        <Sidebar />
      </aside>
      <main className="px-6 flex-1">{children}</main>
    </div>
  );
};

export default ProfileLayout;
