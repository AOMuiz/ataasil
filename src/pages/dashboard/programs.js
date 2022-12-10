import ProfileLayout from "../../layout/profileLayout";
import SectionHeader from "../../components/SectionHeader";
import SectionDivider from "../../components/SectionDivider";

const Programs = () => {
  return (
    <section className="py-12 h-full">
      <div className="my-10">
        <SectionHeader title={"المنتجات"} />
        <p className="text-2xl my-10">البرامج التدريبية</p>
      </div>
      <SectionDivider />
    </section>
  );
};

Programs.PageLayout = ProfileLayout;

export default Programs;
