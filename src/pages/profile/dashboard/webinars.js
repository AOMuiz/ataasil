import SectionHeader from "../../../components/SectionHeader";
import ProfileLayout from "../../../layout/profileLayout";
import tw, { styled } from "twin.macro";

const Webinars = () => {
  return (
    <section className="py-12">
      <div className="my-10">
        <SectionHeader title={"المنتجات"} />
      </div>
      <p className="text-2xl my-8">المؤتمرات الإلكترونية</p>
      <div className="flex gap-4 rounded-full border py-2 border-gray-G20 w-fit px-4 items-center">
        <CategoryItem active>المؤتمرات القادمة</CategoryItem>
        <CategoryItem>المؤتمرات السابقة - مسجلة</CategoryItem>
        <CategoryItem>المؤتمرات السابقة - قيد البث</CategoryItem>
      </div>
      <div className="h-full">
        <p className="font-light text-xl text-center pt-28 text-gray-G30">
          لم تقم بالتسجيل في احد المؤتمرات حتى الآن
        </p>
      </div>
    </section>
  );
};

Webinars.PageLayout = ProfileLayout;

export default Webinars;

const CategoryItem = styled.p(({ active }) => [
  tw`cursor-pointer text-center px-4 py-2 font-bold`,
  active && tw`bg-primary-P300 rounded-3xl  text-neutral-N0 `,
  `width:fit-content`,
]);
