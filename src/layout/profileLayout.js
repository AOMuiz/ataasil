import { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import useGetProfile from "../hooks/useGetProfile";
import Icon from "../components/Icon";
import { navbarHeightVar } from "../graphql/state";
import { useReactiveVar } from "@apollo/client";
import { cn } from "../utils/helpers";

const ProfileLayout = ({ children }) => {
  const navbarHeight = useReactiveVar(navbarHeightVar);
  const [showMobileSidebar, setshowMobileSidebar] = useState(false);
  return (
    <div className={cn("flex h-full")}>
      <nav>
        <button
          onClick={() => setshowMobileSidebar(true)}
          className={cn(
            "top-[10%] hidden rounded-e-md bg-primary-P600 p-3 md:sticky md:block",
            showMobileSidebar && "md:hidden"
          )}
        >
          <Icon id={"menu"} color={"white"} />
        </button>
        <Sidebar
          isMobile={showMobileSidebar}
          setIsmobile={setshowMobileSidebar}
        />
      </nav>
      <main className="flex-1 px-6 md:pe-4 md:ps-2">{children}</main>
    </div>
  );
};

export default ProfileLayout;
