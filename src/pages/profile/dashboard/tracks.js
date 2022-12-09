import ProfileLayout from "../../../layout/profileLayout";
import SectionHeader from "../../../components/SectionHeader";
import SectionDivider from "../../../components/SectionDivider";

const Tracks = () => {
  return (
    <section className="py-12 h-full">
      <div className="my-10">
        <SectionHeader title={"المنتجات"} />
      </div>
      <p className="text-2xl my-8">الإضاءات الإثرائية</p>
      <SectionDivider />
      <div className="h-full">
        <p className="font-light text-xl text-center pt-28 text-gray-G30">
          لم تقم بعد بمشاهدة أي إضاءة إثرائية
        </p>
      </div>
    </section>
  );
};

Tracks.PageLayout = ProfileLayout;

export default Tracks;
