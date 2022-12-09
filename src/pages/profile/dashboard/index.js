import ProfileLayout from "../../../layout/profileLayout";
import SectionHeader from "../../../components/SectionHeader";
import SectionDivider from "../../../components/SectionDivider";

const Index = () => {
  return (
    <section className="py-12">
      <div className="my-10">
        <SectionHeader title={"المنتجات"} />
        <p className="text-2xl my-10">البرامج التدريبية</p>
      </div>
      <SectionDivider />
    </section>
  );
};

Index.PageLayout = ProfileLayout;

export default Index;
