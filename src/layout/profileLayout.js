import { useEffect } from "react";
import Sidebar from "../components/Profile/Sidebar";
import useGetProfile from "../hooks/useGetProfile";

const ProfileLayout = ({ children }) => {
  const [profileDetails, studentProfileLoading, studentProfileError] =
    useGetProfile();

  useEffect(() => {
    if (!studentProfileLoading) {
      console.log(profileDetails);
    }
  }, [profileDetails]);

  // if (studentProfileLoading)
  //   return (
  //     <div className="h-screen">
  //       <h1 className="text-center text-4xl font-bold">Loading...</h1>
  //     </div>
  //   );

  // if (studentProfileError) return `Error! ${studentProfileError.message}`;

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
