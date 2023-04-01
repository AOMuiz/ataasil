import Image from "next/image";
import Frame from "../../public/assets/images/Frame.png";
import useTranslation from "next-translate/useTranslation";
import Icon from "../components/Icon";
import SectionHeader from "./SectionHeader";
import CourseCard from "./CourseCards/CourseCard";

const LoginPage = () => {
  const { t } = useTranslation("index");

  return (
    <>
      <div className="bg-[#E5E5E5] px-20 pt-16">
        <div className="flex flex-row items-center justify-between bg-white">
          <div className="w-[650px]">
            <div className="flex flex-row items-center gap-5 pr-7">
              <Icon
                id={"rightArrow"}
                className="cursor-pointer self-start"
                color="#31C0CC "
                size="30"
              />
              <SectionHeader title={t("login.sign in")} />
            </div>
            <div className="pr-20">
              <p className="pb-4 text-sm font-bold text-[#5A5A5A] ">
                {t("login.identity")}
              </p>
              <div className="pb-[75px]">
                <input
                  type="text"
                  placeholder={t("login.identity")}
                  className="w-[462px] rounded-lg border-2 bg-[#E5E5E5] p-4 outline-none placeholder:text-lg placeholder:placeholder-[#5A5A5A]"
                />
              </div>
              <p className="pb-4 text-sm font-bold text-[#5A5A5A]">
                {t("login.password")}
              </p>
              <div className="pb-16">
                <input
                  type="text"
                  placeholder={t("login.password")}
                  className="w-[462px] rounded-lg border-2 bg-[#E5E5E5] p-4 outline-none placeholder:text-lg placeholder:placeholder-[#5A5A5A]"
                />
              </div>
              <div className="flex items-center justify-start gap-16 text-center">
                <div className="w-36 rounded-full border-2 bg-[#31C0CC] p-2">
                  <p className="cursor-pointer text-base font-bold text-white">
                    {t("login.sign in")}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#5A5A5A]">
                    <span className="cursor-pointer hover:underline">
                      {t("login.forgot password")}
                    </span>
                    &nbsp; {t("login.or")} &nbsp;
                    <span className="cursor-pointer hover:underline">
                      {t("login.create")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch leading-none">
            <Image src={Frame} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-28 ">
          <div className="self-start">
            <p className="pb-10 text-3xl font-bold">{t("login.latest")}</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-8">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
          <div className="flex flex-row gap-2 self-end py-10 pt-9">
            <Icon
              id={"right"}
              color={"white"}
              size={25}
              className="h-12 w-12 cursor-pointer rounded-md bg-[#35CCBC] p-3"
            />
            <Icon
              id={"left"}
              color={"white"}
              size={25}
              className="h-12 w-12 cursor-pointer rounded-md bg-[#35CCBC80] p-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
