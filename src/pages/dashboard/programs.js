import ProfileLayout from "../../layout/profileLayout";
import SectionHeader from "../../components/SectionHeader";
import SectionDivider from "../../components/SectionDivider";
import { Container } from ".";
import CourseCard from "../../components/CourseCards/CourseCard";

const Programs = () => {
  return (
    <Container>
      <div className="my-10">
        <SectionHeader title={"المنتجات"} />
        <p className="text-2xl my-10">البرامج التدريبية</p>
      </div>
      <SectionDivider />
      <div className="mt-4">
        <CourseCard />
      </div>
    </Container>
  );
};

Programs.PageLayout = ProfileLayout;

export default Programs;
