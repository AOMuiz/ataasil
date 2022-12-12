import Image from "next/image";
import Frame from "/public/assets/images/Frame.png";
import useTranslation from "next-translate/useTranslation";
import Icon from "../../components/Icon";
import CourseCard from "../../components/CourseCards/CourseCard";

const LoginPage = () => {
 const { t } = useTranslation("index");

 return (
  <>
   <div className="flex flex-row items-center justify-between">
    <div className="w-[650px] h-[723px]">
     <div className="flex flex-row items-center gap-5 pt-[120px] pb-16">
      <Icon
       id={"rightArrow"}
       className="cursor-pointer self-start"
       color="#31C0CC "
       size="30"
      />

      <p className="text-3xl font-bold ">{t("login.sign in")}</p>
     </div>

     <div className="pr-14">
      <p className="pb-4 font-bold text-sm text-[#5A5A5A] ">
       {t("login.identity")}
      </p>
      <div className="pb-[75px]">
       <input
        type="text"
        placeholder={t("login.identity")}
        className="p-4 border-2 rounded-lg placeholder:placeholder-[#5A5A5A] placeholder:text-lg outline-none w-[462px]"
       />
      </div>

      <p className="pb-4 font-bold text-sm text-[#5A5A5A]">
       {t("login.password")}
      </p>
      <div className="pb-16">
       <input
        type="text"
        placeholder={t("login.password")}
        className="p-4 border-2 rounded-lg placeholder:placeholder-[#5A5A5A] placeholder:text-lg outline-none w-[462px]"
       />
      </div>

      <div className="flex justify-start gap-16 items-center text-center">
       <div className="border-2 rounded-full p-2 w-36 bg-[#31C0CC]">
        <p className="font-bold text-white text-base cursor-pointer">
         {t("login.sign in")}
        </p>
       </div>

       <div>
        <p className="text-[#5A5A5A] font-bold text-sm">
         <span className="hover:underline cursor-pointer">
          {t("login.forgot password")}
         </span>
         &nbsp; {t("login.or")} &nbsp;
         <span className="hover:underline cursor-pointer">
          {t("login.create")}
         </span>
        </p>
       </div>
      </div>
     </div>
    </div>

    <div className="w-[650px] h-[723px]">
     <Image src={Frame} alt="" className="" />
    </div>
   </div>

   <div className="flex flex-col items-start pb-32">
    <div className="">
     <p className="font-bold text-3xl pb-10">{t("login.latest")}</p>
    </div>

    <div className="flex flex-row items-center gap-8">
     <CourseCard />
     <CourseCard />
     <CourseCard />
     <CourseCard />
    </div>
   </div>
  </>
 );
};

export default LoginPage;
