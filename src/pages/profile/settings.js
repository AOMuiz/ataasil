import SectionDivider from "../../components/SectionDivider";
import SectionHeader from "../../components/SectionHeader";
import ProfileLayout from "../../layout/profileLayout";

const User = () => {
  return (
    <section className="py-12">
      <div className="my-10">
        <SectionHeader title={"إعدادت الحساب"} />
        <p className="text-xl font-bold my-7">الملف الشخصي</p>
      </div>
      <SectionDivider />
    </section>
  );
};

User.PageLayout = ProfileLayout;

export default User;
