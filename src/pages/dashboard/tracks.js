import ProfileLayout from "../../layout/profileLayout";
import SectionHeader from "../../components/SectionHeader";
import SectionDivider from "../../components/SectionDivider";
import { Container } from ".";

const Tracks = () => {
  return (
    <Container>
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
    </Container>
  );
};

Tracks.PageLayout = ProfileLayout;

export default Tracks;
