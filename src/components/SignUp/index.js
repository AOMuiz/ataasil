import React from "react";
import Image from "next/image";
import signupframe from "/public/assets/images/sign_up_frame.png";
import useTranslation from "next-translate/useTranslation";
import robot from "/public/assets/images/robot.png";

const SignUp = () => {
  const { t } = useTranslation("index");

  return (
    <div tw="flex bg-[#E5E5E5]">
      <div tw="bg-white w-1/2 px-20 py-20">
        <h1 tw="font-bold	text-3xl py-4">{t("sign up page.title")}</h1>
        <div>
          <p tw="py-4">{t("sign up page.nationality")}</p>
          <input
            type="text"
            placeholder={t("sign up page.nationality")}
            tw="border	w-[552px] h-[60px] p-4 rounded-md bg-[#E5E5E5]"
          />
        </div>

        <div tw="py-6">
          <p tw="py-4">{t("sign up page.job")}</p>
          <input
            type="text"
            placeholder={t("sign up page.job")}
            tw="border	w-[552px] h-[60px] p-4 rounded-md"
          />
        </div>

        <div tw="py-2">
          <p tw="py-4">{t("sign up page.number")}</p>
          <input
            type="text"
            placeholder={t("sign up page.number")}
            tw="border	w-[552px] h-[60px] p-4 rounded-md"
          />
        </div>

        <p tw="py-4">{t("sign up page.date")}</p>
        <div tw="py-2 flex gap-6">
          <div>
            <input
              type="text"
              placeholder={t("sign up page.day")}
              tw="border	w-[167px] h-[60px] p-4 rounded-md"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder={t("sign up page.month")}
              tw="border	w-[167px] h-[60px] p-4 rounded-md"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder={t("sign up page.year")}
              tw="border	w-[167px] h-[60px] p-4 rounded-md"
            />
          </div>
        </div>

        <div tw="flex gap-10">
          <div tw="py-2">
            <p tw="py-4">{t("sign up page.phone number")}</p>
            <input
              type="text"
              placeholder={t("sign up page.phone number")}
              tw="border	w-[344px] h-[60px] p-4 rounded-md"
            />
          </div>

          <div tw="py-2">
            <p tw="py-4">{t("sign up page.code")}</p>
            <input
              type="text"
              placeholder={t("sign up page.number")}
              tw="border	w-[167px] h-[60px] p-4 rounded-md"
            />
          </div>
        </div>

        <div tw="py-6">
          <p tw="py-4">{t("sign up page.email")}</p>
          <input
            type="text"
            placeholder={t("sign up page.email")}
            tw="border	w-[552px] h-[60px] p-4 rounded-md"
          />
        </div>

        <div tw="py-6">
          <p tw="py-4">{t("sign up page.email confirmation")}</p>
          <input
            type="text"
            placeholder={t("sign up page.email confirmation")}
            tw="border	w-[552px] h-[60px] p-4 rounded-md"
          />
        </div>

        <div tw="py-6">
          <p tw="py-4">{t("sign up page.password")}</p>
          <input
            type="text"
            placeholder={t("sign up page.password")}
            tw="border	w-[552px] h-[60px] p-4 rounded-md"
          />
        </div>

        <div tw="py-6">
          <p tw="py-4">{t("sign up page.password confirmation")}</p>
          <input
            type="text"
            placeholder={t("sign up page.password confirmation")}
            tw="border	w-[552px] h-[60px] p-4 rounded-md"
          />
        </div>

        <div tw="flex justify-around w-[329px] h-[100px] border rounded-md my-10">
          <div>
            <Image src={robot} alt="" />
          </div>
          <p>I am not a robot</p>
        </div>
      </div>
      <div tw="">
        <Image src={signupframe} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
