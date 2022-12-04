import ChangePassword from "../../components/ProfileSettings/ChangePassword";
import NotificationSetting from "../../components/ProfileSettings/NotificationSetting";
import SectionDivider from "../../components/SectionDivider";
import SectionHeader from "../../components/SectionHeader";
import ProfileLayout from "../../layout/profileLayout";

const User = () => {
  return (
    <div className="py-12">
      <div className="my-10">
        <SectionHeader title={"إعدادت الحساب"} />
        <p className="text-2xl font-bold my-7">الملف الشخصي</p>
      </div>
      <SectionDivider />
      <div>
        <p className="text-2xl font-bold my-7">الاهتمامات</p>
        <SectionDivider />
      </div>
      <NotificationSetting />
      <ChangePassword />
    </div>
  );
};

User.PageLayout = ProfileLayout;

export default User;
