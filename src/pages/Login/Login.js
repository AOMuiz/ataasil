import Image from "next/image";
import Frame from "/public/assets/images/Frame.png";
import useTranslation from "next-translate/useTranslation";

const LoginPage = () => {
 const { t } = useTranslation("index");

 return (
  <div className="flex flex-row items-center justify-between p-20">
   <div className="w-[650px] h-[723px]">
    <p className="text-3xl font-bold pt-[120px] pb-[75px]">
     {t("login.sign in")}
    </p>

    <p className="pb-[14px] font-bold text-sm text-[#5A5A5A]">
     {t("login.identity")}
    </p>
    <div className="pb-[75px]">
     <input
      type="text"
      placeholder={t("login.identity")}
      className="p-4 border-2 rounded-lg placeholder:placeholder-[#5A5A5A] placeholder:text-lg outline-none w-[462px]"
     />
    </div>

    <p className="pb-[14px] font-bold text-sm text-[#5A5A5A]">
     {t("login.password")}
    </p>
    <div className="pb-[75px]">
     <input
      type="text"
      placeholder={t("login.password")}
      className="p-4 border-2 rounded-lg placeholder:placeholder-[#5A5A5A] placeholder:text-lg outline-none w-[462px]"
     />
    </div>

    <div className="flex justify-start gap-[72px] items-center text-center">
     <div className="border-2 rounded-full p-2 w-[142px] bg-[#31C0CC]">
      <p className="font-bold text-white text-base cursor-pointer">
       {t("login.sign in")}
      </p>
     </div>

     <div>
      <p className="text-[#5A5A5A] font-bold text-sm">
       <span className="hover:underline cursor-pointer">
        {t("login.forgot password")}
       </span>{" "}
       &nbsp; {t("login.or")} &nbsp;
       <span className="hover:underline cursor-pointer">
        {t("login.create")}
       </span>
      </p>
     </div>
    </div>
   </div>

   <div className="w-[650px] h-[723px]">
    <Image src={Frame} alt="" className="" />
   </div>
  </div>
 );
};

export default LoginPage;
