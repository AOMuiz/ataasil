import ChangePassword from "../../components/ProfileSettings/ChangePassword";
import Interests from "../../components/ProfileSettings/Interests";
import NotificationSetting from "../../components/ProfileSettings/NotificationSetting";
import UserProfile from "../../components/ProfileSettings/UserProfile";
import SectionDivider from "../../components/SectionDivider";
import SectionHeader from "../../components/SectionHeader";
import ProfileLayout from "../../layout/profileLayout";

const User = () => {
  return (
    <div className="py-12">
      <div className="my-10">
        <SectionHeader title={"إعدادت الحساب"} />
      </div>
      <UserProfile />
      <Interests />
      <NotificationSetting />
      <ChangePassword />
    </div>
  );
};

User.PageLayout = ProfileLayout;

export default User;
