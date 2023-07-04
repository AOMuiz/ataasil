import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import signupframe from "/public/assets/images/sign_up_frame.png";
import useTranslation from "next-translate/useTranslation";
import robot from "/public/assets/images/robot.png";
import CourseCard from "../../components/CourseCards/CourseCard";
import CtaButton from "../../components/CtaButton";

const SignUp = () => {
  const { t } = useTranslation("index");

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is Required"),
    nationality: yup.string().required(),
    contact: yup.string().min(5).max(15).required("Contact is required"),
    email: yup.string().email().required("Email is required"),
    emailConfirmation: yup
      .string()
      .oneOf([yup.ref("email")], "Email Must match"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Must match"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-full bg-primary-P700">
      <div className="flex">
        <form
          className="w-1/2 bg-white px-20 py-20 shadow-lg 2md:w-full sm:px-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="py-4	text-3xl font-bold">{t("sign up page.title")}</h1>
          <div>
            <label htmlFor="fullName" className="py-4 capitalize">
              {t("sign up page.fullName")}
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              {...register("fullName")}
              placeholder={t("sign up page.fullName")}
              className="h-[60px]	w-full rounded-md border bg-primary-P700 p-4"
            />
            {errors.fullName && (
              <p tw="text-red-400">{errors.fullName?.message}</p>
            )}
          </div>
          <div className="py-6">
            <label htmlFor="nationality" className="py-4 capitalize">
              {t("sign up page.nationality")}
            </label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              {...register("nationality")}
              placeholder={t("sign up page.nationality")}
              className="h-[60px]	w-full rounded-md border bg-primary-P700 p-4"
            />
            {errors.nationality && (
              <p tw="text-red-400">{errors.nationality?.message}</p>
            )}
          </div>
          <div className="py-6">
            <label htmlFor="job-type" className="py-4 capitalize">
              {t("sign up page.job")}
            </label>
            <select
              name="job-type"
              id="job-type"
              placeholder={t("sign up page.job")}
              className="h-[60px]	w-full rounded-md border bg-primary-P700 p-4"
            >
              <option value="" className="text-gray-300">
                -Please choose an option-
              </option>
              <option value="private">Private Sector</option>
              <option value="public">Public Sector</option>
              <option value="non-employee">Non-employee</option>
            </select>
          </div>
          <div className="py-2">
            <label htmlFor="contact" className="py-4 capitalize">
              {t("sign up page.number")}
            </label>
            <input
              type="text"
              id="contact"
              placeholder={t("sign up page.number")}
              className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
            />
          </div>
          <p className="py-4 capitalize">{t("sign up page.date")}</p>
          <div className="flex gap-6 py-2 sm:flex-wrap">
            <div className="sm:w-full">
              <input
                type="number"
                placeholder={t("sign up page.day")}
                className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
              />
            </div>
            <div className="sm:w-full">
              <input
                type="number"
                placeholder={t("sign up page.month")}
                className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
              />
            </div>
            <div className="sm:w-full">
              <input
                type="number"
                placeholder={t("sign up page.year")}
                className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
              />
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-10">
            <div className="flex-1 py-2">
              <label className="py-4 capitalize">
                {t("sign up page.phone number")}
              </label>
              <input
                type="number"
                {...register("contact")}
                placeholder={t("sign up page.phone number")}
                className="h-[60px] w-full rounded-md border bg-primary-P700 p-4 "
              />
            </div>
            <div className="flex-1 py-2">
              <label htmlFor="" className="py-4 capitalize">
                {t("sign up page.code")}
              </label>
              <input
                type="number"
                placeholder={t("sign up page.code")}
                className="h-[60px] w-full rounded-md border bg-primary-P700 p-4"
              />
            </div>
          </div>
          <div className="py-6">
            <label htmlFor="email" className="py-4 capitalize">
              {t("sign up page.email")}
            </label>
            <input
              {...register("email")}
              type="email"
              required
              name="email"
              id="email"
              placeholder={t("sign up page.email")}
              className="h-[60px]	 w-full rounded-md border bg-primary-P700 p-4"
            />
            {errors.email && <p tw="text-red-400">{errors.email?.message}</p>}
          </div>
          <div className="py-6">
            <label htmlFor="emailConfirmation" className="py-4 capitalize">
              {t("sign up page.email confirmation")}
            </label>
            <input
              type="email"
              {...register("emailConfirmation")}
              required
              name="email-confirm"
              id="email-confirm"
              placeholder={t("sign up page.email confirmation")}
              className="h-[60px]	 w-full rounded-md border bg-primary-P700 p-4"
            />
            {errors.emailConfirmation && (
              <p tw="text-red-400">{errors.emailConfirmation?.message}</p>
            )}
          </div>
          <div className="py-6">
            <label htmlFor="password" className="py-4 capitalize">
              {t("sign up page.password")}
            </label>
            <input
              required
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder={t("sign up page.password")}
              className="h-[60px]	 w-full rounded-md border  bg-primary-P700 p-4"
            />
            {errors.password && (
              <p tw="text-red-400">{errors.password?.message}</p>
            )}
          </div>
          <div className="py-6">
            <label htmlFor="password-confirm" className="py-4 capitalize">
              {t("sign up page.password confirmation")}
            </label>
            <input
              required
              type="password"
              {...register("passwordConfirmation")}
              name="password-confirm"
              id="password-confirm"
              placeholder={t("sign up page.password confirmation")}
              className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
            />
            {errors.passwordConfirmation && (
              <p tw="text-red-400">{errors.passwordConfirmation?.message}</p>
            )}
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
          <div className="my-4 flex items-center justify-between md:flex-wrap">
            <CtaButton
              btnType="submit"
              className="rounded-3xl bg-[#D5D5D5] py-2 text-center text-white"
            >
              {t("sign up page.create account")}
            </CtaButton>
            <div className="capitalize">{t("sign up page.account")}</div>
          </div>
        </form>
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
