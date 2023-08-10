import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import CourseCard from "../../components/CourseCards/CourseCard";
import signupframe from "/public/assets/images/sign_up_frame.png";
import { FormSection } from "../../components/Signup/form-section";

const SignUp = () => {
  const { t } = useTranslation("index");

  return (
    <div className="h-full bg-primary-P700">
      <div className="flex">
        <FormSection />
        <div className="2md:hidden">
          <Image src={signupframe} alt="" />
        </div>
      </div>
      <div className="px-10 py-12 md:px-8 sm:px-6">
        <p className="px-14 pb-10 text-3xl font-bold md:px-5 md:text-2xl">
          {t("login.latest")}
        </p>
        <div className="flex items-center gap-8 overflow-x-auto">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
