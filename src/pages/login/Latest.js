import useTranslation from "next-translate/useTranslation";
import CourseCard from "../../components/CourseCards/CourseCard";

const Latest = () => {
 const { t } = useTranslation("index");

 return (
  <div className="flex flex-col items-right p-20 pb-[136px]">
   <div className="pr-14">
    <div>
     <p className="font-bold text-[30px] pb-[41px]">{t("login.latest")}</p>
    </div>
    <div className="flex flex-row items-center gap-[21px]">
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
    </div>
   </div>
  </div>
 );
};

export default Latest;
