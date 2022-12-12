import React from "react";
import Image from "next/image";
import signupframe from "/public/assets/images/sign_up_frame.png";
import useTranslation from "next-translate/useTranslation";
import robot from "/public/assets/images/robot.png";
import CourseCards from "../../components/CourseCards";

const SignUp = () => {
  const { t } = useTranslation("index");

  return (
    <>
      <div tw="flex bg-neutral-N20">
        <div tw="bg-white shadow-lg	 w-1/2 px-20 py-20">
          <h1 tw="font-bold	text-3xl py-4">{t("sign up page.title")}</h1>
          <div>
            <p tw="py-4">{t("sign up page.nationality")}</p>
            <input
              type="text"
              placeholder={t("sign up page.nationality")}
              tw="border	w-[552px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
            />
          </div>

          <div tw="py-6">
            <p tw="py-4">{t("sign up page.job")}</p>
            <input
              type="text"
              placeholder={t("sign up page.job")}
              tw="border	w-[552px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
            />
          </div>

          <div tw="py-2">
            <p tw="py-4">{t("sign up page.number")}</p>
            <input
              type="text"
              placeholder={t("sign up page.number")}
              tw="border	w-[552px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
            />
          </div>

          <p tw="py-4">{t("sign up page.date")}</p>
          <div tw="py-2 flex gap-6">
            <div>
              <input
                type="text"
                placeholder={t("sign up page.day")}
                tw="border	w-[167px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder={t("sign up page.month")}
                tw="border	w-[167px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder={t("sign up page.year")}
                tw="border	w-[167px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
              />
            </div>
          </div>

          <div tw="flex gap-10">
            <div tw="py-2">
              <p tw="py-4">{t("sign up page.phone number")}</p>
              <input
                type="text"
                placeholder={t("sign up page.phone number")}
                tw="border	w-[344px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
              />
            </div>

            <div tw="py-2">
              <p tw="py-4">{t("sign up page.code")}</p>
              <input
                type="text"
                placeholder={t("sign up page.number")}
                tw="border	w-[167px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
              />
            </div>
          </div>

          <div tw="py-6">
            <p tw="py-4">{t("sign up page.email")}</p>
            <input
              type="text"
              placeholder={t("sign up page.email")}
              tw="border	w-[552px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
            />
          </div>

          <div tw="py-6">
            <p tw="py-4">{t("sign up page.email confirmation")}</p>
            <input
              type="text"
              placeholder={t("sign up page.email confirmation")}
              tw="border	w-[552px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
            />
          </div>

          <div tw="py-6">
            <p tw="py-4">{t("sign up page.password")}</p>
            <input
              type="text"
              placeholder={t("sign up page.password")}
              tw="border	w-[552px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
            />
          </div>

          <div tw="py-6">
            <p tw="py-4">{t("sign up page.password confirmation")}</p>
            <input
              type="text"
              placeholder={t("sign up page.password confirmation")}
              tw="border	w-[552px] h-[60px] p-4 rounded-md bg-primary-P700 border-black"
            />
          </div>

          <div tw="flex justify-around items-center w-[329px] h-32 border rounded-md my-10 bg-primary-P700 border-black">
            <div>
              <Image src={robot} alt="" />
            </div>
            <div tw="flex gap-2 rounded-md">
              <p>I am not a robot</p>
              <div tw="border-black border h-8 w-8 cursor-pointer bg-primary-P700"></div>
            </div>
          </div>

          <div>
            <div tw="flex gap-2 py-2">
              <div tw="border-black border h-6 w-6"></div>
              <div className="text-lg	">
                {t("sign up page.email notification")}
              </div>
            </div>
            <div tw="flex gap-2">
              <div tw="border-black border h-6 w-6"></div>
              <div className="text-lg	">
                {t("sign up page.text notification")}
              </div>
            </div>
            <div tw="flex gap-2 py-2">
              <div tw="border-black border h-6 w-6"></div>
              <div className="text-lg	">{t("sign up page.agreement")}</div>
            </div>
          </div>

          <div className="flex justify-between my-4">
            <div tw="text-center text-white py-2 rounded-3xl bg-[#D5D5D5] w-40 h-10">
              {t("sign up page.create account")}
            </div>
            <div>{t("sign up page.account")}</div>
          </div>
        </div>

        <div tw="">
          <Image src={signupframe} alt="" />
        </div>
      </div>
      <div>
        <CourseCards />
      </div>
    </>
  );
};

export default SignUp;
