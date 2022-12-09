import SectionHeader from "../../../components/SectionHeader";
import SectionDivider from "../../../components/SectionDivider";
import ProfileLayout from "../../../layout/profileLayout";

const Webinars = () => {
  return (
    <section className="py-12">
      <div className="my-10">
        <SectionHeader title={"المنتجات"} />
      </div>
      <p className="text-2xl my-8">المنتجات</p>
    </section>
  );
};

Webinars.PageLayout = ProfileLayout;

export default Webinars;
