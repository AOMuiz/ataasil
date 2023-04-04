import Image from "next/image";
import Frame from "../../public/assets/images/Frame.png";
import useTranslation from "next-translate/useTranslation";
import Icon from "../components/Icon";
import SectionHeader from "./SectionHeader";
import CourseCard from "./CourseCards/CourseCard";
import CtaButton from "./CtaButton";

const LoginPage = () => {
  const { t } = useTranslation("index");

  return (
    <>
      <div className="bg-primary-P700 px-20 pt-16 2md:px-10 md:px-6">
        <div className="flex flex-row items-center justify-between gap-2 bg-white 2md:px-3">
          <div className="py-4 2md:w-full">
            <div className="flex flex-row items-center gap-5 pr-7 md:pr-0">
              <Icon
                id={"rightArrow"}
                className="cursor-pointer self-start text-primary-P300"
                color="#31C0CC"
                size="30"
              />
              <SectionHeader className="text-lg" title={t("login.sign in")} />
            </div>
            <div className="pr-20 md:pr-4">
              <p className="pb-4 text-sm font-bold text-gray-G30 ">
                {t("login.identity")}
              </p>
              <div className="pb-20 md:pb-6">
                <input
                  type="text"
                  placeholder={t("login.identity")}
                  className="w-full rounded-lg border-2 bg-primary-P700 p-4 text-gray-G30 outline-none placeholder:text-lg placeholder:placeholder-gray-G30 2md:w-2/3 md:w-full"
                />
              </div>
              <p className="pb-4 text-sm font-bold text-gray-G30">
                {t("login.password")}
              </p>
              <div className="pb-16 md:pb-6">
                <input
                  type="text"
                  placeholder={t("login.password")}
                  className="w-full rounded-lg border-2 bg-primary-P700 p-4 outline-none placeholder:text-lg placeholder:placeholder-gray-G30 2md:w-2/3 md:w-full"
                />
              </div>
              <div className="flex items-center justify-start gap-16 text-center md:flex-wrap md:gap-8">
                <CtaButton className="font-bold">
                  {t("login.sign in")}
                </CtaButton>
                <div>
                  <p className="text-sm font-bold text-gray-G30">
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
          <div className="self-stretch leading-none 2md:hidden">
            <Image src={Frame} alt="" />
          </div>
        </div>
        <div className="py-28">
          <div>
            <p className="pb-10 text-3xl font-bold">{t("login.latest")}</p>
          </div>
          <div className="flex flex-row items-center gap-6 overflow-x-auto py-2">
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
