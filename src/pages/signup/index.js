import Image from "next/image";
import signupframe from "/public/assets/images/sign_up_frame.png";
import useTranslation from "next-translate/useTranslation";
import robot from "/public/assets/images/robot.png";
import CourseCard from "../../components/CourseCards/CourseCard";

const SignUp = () => {
  const { t } = useTranslation("index");

  return (
    <div className="h-full bg-primary-P700">
      <div className="flex">
        <div className="w-1/2 bg-white px-20 py-20 shadow-lg 2md:w-full sm:px-10">
          <h1 className="py-4	text-3xl font-bold">{t("sign up page.title")}</h1>
          <div>
            <p className="py-4">{t("sign up page.nationality")}</p>
            <input
              type="text"
              placeholder={t("sign up page.nationality")}
              className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
            />
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.job")}</p>
            <input
              type="text"
              placeholder={t("sign up page.job")}
              className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
            />
          </div>
          <div className="py-2">
            <p className="py-4">{t("sign up page.number")}</p>
            <input
              type="text"
              placeholder={t("sign up page.number")}
              className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
            />
          </div>
          <p className="py-4">{t("sign up page.date")}</p>
          <div className="flex gap-6 py-2 sm:flex-wrap">
            <div className="sm:w-full">
              <input
                type="text"
                placeholder={t("sign up page.day")}
                className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
              />
            </div>
            <div className="sm:w-full">
              <input
                type="text"
                placeholder={t("sign up page.month")}
                className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
              />
            </div>
            <div className="sm:w-full">
              <input
                type="text"
                placeholder={t("sign up page.year")}
                className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
              />
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-10">
            <div className="flex-1 py-2">
              <p className="py-4">{t("sign up page.phone number")}</p>
              <input
                type="text"
                placeholder={t("sign up page.phone number")}
                className="h-[60px] w-full rounded-md border bg-primary-P700 p-4 "
              />
            </div>
            <div className="flex-1 py-2">
              <p className="py-4">{t("sign up page.code")}</p>
              <input
                type="text"
                placeholder={t("sign up page.number")}
                className="h-[60px] w-full rounded-md border bg-primary-P700 p-4"
              />
            </div>
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.email")}</p>
            <input
              type="text"
              placeholder={t("sign up page.email")}
              className="h-[60px]	 w-full rounded-md border bg-primary-P700 p-4"
            />
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.email confirmation")}</p>
            <input
              type="text"
              placeholder={t("sign up page.email confirmation")}
              className="h-[60px]	 w-full rounded-md border bg-primary-P700 p-4"
            />
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.password")}</p>
            <input
              type="text"
              placeholder={t("sign up page.password")}
              className="h-[60px]	 w-full rounded-md border  bg-primary-P700 p-4"
            />
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.password confirmation")}</p>
            <input
              type="text"
              placeholder={t("sign up page.password confirmation")}
              className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
            />
          </div>

          <div className="my-10 flex h-32 max-w-[329px] items-center justify-around rounded-md border border-black bg-primary-P700">
            <div>
              <Image src={robot} alt="" />
            </div>
            <label
              htmlFor="recaptcha"
              className="text-md flex items-center gap-2 py-2"
            >
              <input
                type="checkbox"
                name="recaptcha"
                id="recaptcha"
                className="h-4 w-4"
              />
              I am not a robot
            </label>
          </div>
          <div>
            <label
              htmlFor="email-notification"
              className="text-md flex items-center gap-2 py-2"
            >
              <input
                className="h-4 w-4"
                type="checkbox"
                name="email-notification"
                id="email-notification"
              />
              {t("sign up page.email notification")}
            </label>
            <label
              htmlFor="text-notification"
              className="text-md flex items-center gap-2 py-2"
            >
              <input
                className="h-4 w-4"
                type="checkbox"
                name="text-notification"
                id="text-notification"
              />
              {t("sign up page.text notification")}
            </label>
            <label
              htmlFor="agreement"
              className="text-md flex items-center gap-2 py-2"
            >
              <input
                className="h-4 w-4"
                type="checkbox"
                name="agreement"
                id="agreement"
              />
              {t("sign up page.agreement")}
            </label>
          </div>
          <div className="my-4 flex justify-between">
            <div className="h-10 w-40 rounded-3xl bg-[#D5D5D5] py-2 text-center text-white">
              {t("sign up page.create account")}
            </div>
            <div>{t("sign up page.account")}</div>
          </div>
        </div>
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
