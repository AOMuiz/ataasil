import ChangePassword from "../../components/ProfileSettings/ChangePassword";
import Interests from "../../components/ProfileSettings/Interests";
import NotificationSetting from "../../components/ProfileSettings/NotificationSetting";
import UserProfile from "../../components/ProfileSettings/UserProfile";
import SectionHeader from "../../components/SectionHeader";
import ProfileLayout from "../../layout/profileLayout";
import { Container } from ".";

const User = () => {
  return (
    <Container>
      <div className="my-10">
        <SectionHeader title={"إعدادت الحساب"} />
      </div>
      <UserProfile />
      <Interests />
      <NotificationSetting />
      <ChangePassword />
    </Container>
  );
};

User.PageLayout = ProfileLayout;

export default User;
