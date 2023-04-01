import Image from "next/image";
import signupframe from "/public/assets/images/sign_up_frame.png";
import useTranslation from "next-translate/useTranslation";
import robot from "/public/assets/images/robot.png";
import CourseCard from "../../components/CourseCards/CourseCard";

const SignUp = () => {
  const { t } = useTranslation("index");

  return (
    <div className="h-full bg-[#E5E5E5]">
      <div className="flex">
        <div className="w-1/2 bg-white px-20 py-20 shadow-lg">
          <h1 className="py-4	text-3xl font-bold">{t("sign up page.title")}</h1>
          <div>
            <p className="py-4">{t("sign up page.nationality")}</p>
            <input
              type="text"
              placeholder={t("sign up page.nationality")}
              className="h-[60px]	w-[552px] rounded-md border border-black bg-primary-P700 p-4"
            />
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.job")}</p>
            <input
              type="text"
              placeholder={t("sign up page.job")}
              className="h-[60px]	w-[552px] rounded-md border border-black bg-primary-P700 p-4"
            />
          </div>
          <div className="py-2">
            <p className="py-4">{t("sign up page.number")}</p>
            <input
              type="text"
              placeholder={t("sign up page.number")}
              className="h-[60px]	w-[552px] rounded-md border border-black bg-primary-P700 p-4"
            />
          </div>
          <p className="py-4">{t("sign up page.date")}</p>
          <div className="flex gap-6 py-2">
            <div>
              <input
                type="text"
                placeholder={t("sign up page.day")}
                className="h-[60px]	w-[167px] rounded-md border border-black bg-primary-P700 p-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t("sign up page.month")}
                className="h-[60px]	w-[167px] rounded-md border border-black bg-primary-P700 p-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t("sign up page.year")}
                className="h-[60px]	w-[167px] rounded-md border border-black bg-primary-P700 p-4"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="py-2">
              <p className="py-4">{t("sign up page.phone number")}</p>
              <input
                type="text"
                placeholder={t("sign up page.phone number")}
                className="h-[60px]	w-[344px] rounded-md border border-black bg-primary-P700 p-4"
              />
            </div>
            <div className="py-2">
              <p className="py-4">{t("sign up page.code")}</p>
              <input
                type="text"
                placeholder={t("sign up page.number")}
                className="h-[60px]	w-[167px] rounded-md border border-black bg-primary-P700 p-4"
              />
            </div>
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.email")}</p>
            <input
              type="text"
              placeholder={t("sign up page.email")}
              className="h-[60px]	w-[552px] rounded-md border border-black bg-primary-P700 p-4"
            />
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.email confirmation")}</p>
            <input
              type="text"
              placeholder={t("sign up page.email confirmation")}
              className="h-[60px]	w-[552px] rounded-md border border-black bg-primary-P700 p-4"
            />
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.password")}</p>
            <input
              type="text"
              placeholder={t("sign up page.password")}
              className="h-[60px]	w-[552px] rounded-md border border-black bg-primary-P700 p-4"
            />
          </div>
          <div className="py-6">
            <p className="py-4">{t("sign up page.password confirmation")}</p>
            <input
              type="text"
              placeholder={t("sign up page.password confirmation")}
              className="h-[60px]	w-[552px] rounded-md border border-black bg-primary-P700 p-4"
            />
          </div>

          <div className="my-10 flex h-32 w-[329px] items-center justify-around rounded-md border border-black bg-primary-P700">
            <div>
              <Image src={robot} alt="" />
            </div>
            <div className="flex gap-2 rounded-md">
              <p>I am not a robot</p>
              <div className="h-8 w-8 cursor-pointer border border-black bg-primary-P700"></div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 py-2">
              <div className="h-6 w-6 border border-black"></div>
              <div className="text-lg	">
                {t("sign up page.email notification")}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-6 w-6 border border-black"></div>
              <div className="text-lg	">
                {t("sign up page.text notification")}
              </div>
            </div>
            <div className="flex gap-2 py-2">
              <div className="h-6 w-6 border border-black"></div>
              <div className="text-lg	">{t("sign up page.agreement")}</div>
            </div>
          </div>

          <div className="my-4 flex justify-between">
            <div className="h-10 w-40 rounded-3xl bg-[#D5D5D5] py-2 text-center text-white">
              {t("sign up page.create account")}
            </div>
            <div>{t("sign up page.account")}</div>
          </div>
        </div>
        <div>
          <Image src={signupframe} alt="" />
        </div>
      </div>
      <div className="py-12">
        <p className="pb-10 pr-14 text-3xl font-bold">{t("login.latest")}</p>
        <div className="flex flex-row items-center justify-center gap-8">
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
