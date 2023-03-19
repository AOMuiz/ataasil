import SectionHeader from "../../components/SectionHeader";
import ProfileLayout from "../../layout/profileLayout";
import tw, { styled } from "twin.macro";
import { Container } from ".";

const Webinars = () => {
  return (
    <Container>
      <div className="my-10">
        <SectionHeader title={"المنتجات"} />
      </div>
      <p className="my-8 text-2xl">المؤتمرات الإلكترونية</p>
      <div className="flex w-fit items-center gap-4 rounded-full border border-gray-G20 py-2 px-4">
        <CategoryItem active>المؤتمرات القادمة</CategoryItem>
        <CategoryItem>المؤتمرات السابقة - مسجلة</CategoryItem>
        <CategoryItem>المؤتمرات السابقة - قيد البث</CategoryItem>
      </div>
      <div className="h-full">
        <p className="pt-28 text-center text-xl font-light text-gray-G30">
          لم تقم بالتسجيل في احد المؤتمرات حتى الآن
        </p>
      </div>
    </Container>
  );
};

Webinars.PageLayout = ProfileLayout;

export default Webinars;

const CategoryItem = styled.p(({ active }) => [
  tw`cursor-pointer text-center px-4 py-2 font-bold`,
  active && tw`bg-primary-P300 rounded-3xl  text-neutral-N0 `,
  `width:fit-content`,
]);
