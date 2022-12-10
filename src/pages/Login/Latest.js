import { data } from "autoprefixer";
import useTranslation from "next-translate/useTranslation";
import CourseCard from "../../components/CourseCards/CourseCard";

const Latest = () => {
 const { t } = useTranslation("index");

 return (
  <div className="flex flex-col items-center justify-center pb-[136px]">
   <div className="self-start mr-[148px]">
    <p className="font-bold text-[30px] pb-[41px]">{t("login.latest")}</p>
   </div>
   <div className="flex flex-row items-center gap-[21px] self-center">
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
   </div>
  </div>
 );
};

export default Latest;
