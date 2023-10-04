import Image from "next/image";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useTranslation from "next-translate/useTranslation";
import { toast } from "react-toastify";

import CtaButton from "../../CtaButton";
import { CREATE_STUDENT_ACCOUNT } from "../../../graphql/mutations/studentAuth";
import robot from "/public/assets/images/robot.png";
import VerifyEmail from "../verify-email";
import { authStateVar } from "../../../graphql/state";

export const FormSection = () => {
  const { t } = useTranslation("index");
  const [createStudentAccount, { data: response, loading, error, reset }] =
    useMutation(CREATE_STUDENT_ACCOUNT);

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is Required"),
    nationality: yup.string().required(),
    contact: yup.string().min(5).max(15).required("Contact is required"),
    jobSector: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    emailConfirmation: yup
      .string()
      .oneOf([yup.ref("email")], "Email Must match"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Must match"),
    day: yup.string().min(2, "Day must be a minimum of 2 digits").required(),
    month: yup
      .string()
      .min(2, "Month must be a minimum of 2 digits")
      .required(),
    year: yup.string().min(4, "Year must be a minimum of 4 digits").required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password, jobSector, fullName, contact, day, month, year } =
      data;
    console.log({
      email,
      password,
      jobSector,
      fullName,
      contact,
      day,
      month,
      year,
    });
    const studentInfo = {
      email,
      password,
      jobSector,
      username: fullName,
      dateOfBirth: `${year}-${month}-${day}`,
      phone: `+${contact}`,
    };
    try {
      await createStudentAccount({ variables: studentInfo });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light",
      });
    }
  };

  if (response) {
    authStateVar({
      verificationToken: response.student_register_sendCode.token,
    });
    return <VerifyEmail />;
  }

  return (
    <form
      className="w-1/2 bg-white px-20 py-20 shadow-lg 2md:w-full sm:px-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="py-4 text-3xl font-bold">{t("sign up page.title")}</h1>
      <div className="space-y-3">
        <label htmlFor="fullName" className="py-4 capitalize">
          {t("sign up page.full name")}
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          {...register("fullName")}
          placeholder={t("sign up page.full name")}
          className="h-[60px]	w-full rounded-md border bg-primary-P700 p-4"
        />
        {errors.fullName && <p tw="text-red-400">{errors.fullName?.message}</p>}
      </div>
      <div className="space-y-3 py-6">
        <label htmlFor="nationality" className="py-4 capitalize">
          {t("sign up page.nationality")}
        </label>
        <input
          type="text"
          name="nationality"
          id="nationality"
          {...register("nationality")}
          placeholder={t("sign up page.nationality")}
          className="h-[60px] w-full rounded-md border bg-primary-P700 p-4"
        />
        <div>
          {errors.nationality && (
            <p tw="text-red-400">{errors.nationality?.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-3 py-6">
        <label htmlFor="jobSector" className="py-4 capitalize">
          {t("sign up page.job")}
        </label>
        <select
          name="jobSector"
          id="jobSector"
          {...register("jobSector")}
          onChange={(e) =>
            setValue("jobSector", e.target.value, { shouldValidate: true })
          } // Using setValue
          placeholder={t("sign up page.job")}
          className="h-[60px]	w-full rounded-md border bg-primary-P700 p-4"
        >
          <option value="" className="text-gray-300">
            -Please choose an option-
          </option>
          <option value="Private">Private Sector</option>
          <option value="Government">Public Sector</option>
        </select>
        {errors.jobSector && (
          <p tw="text-red-400">{errors.jobSector?.message}</p>
        )}
      </div>
      <div className="space-y-3 py-2">
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
        <div className="space-y-3 sm:w-full ">
          <input
            type="number"
            id="day"
            placeholder={t("sign up page.day")}
            {...register("day")}
            className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
          />
        </div>
        <div className="sm:w-full ">
          <input
            type="number"
            id="month"
            placeholder={t("sign up page.month")}
            className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
            {...register("month")}
          />
        </div>
        <div className=" sm:w-full">
          <input
            id="year"
            type="number"
            placeholder={t("sign up page.year")}
            className="h-[60px]	w-full rounded-md border  bg-primary-P700 p-4"
            {...register("year")}
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-10">
        <div className="flex-1 space-y-3 py-2 ">
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
        <div className="flex-1 space-y-3 py-2 ">
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
      <div className="space-y-3 py-6 ">
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
      <div className="space-y-3 py-6 ">
        <label htmlFor="emailConfirmation" className="py-4 capitalize">
          {t("sign up page.email confirmation")}
        </label>
        <input
          type="email"
          {...register("emailConfirmation")}
          required
          name="emailConfirmation"
          id="emailConfirmation"
          placeholder={t("sign up page.email confirmation")}
          className="h-[60px]	 w-full rounded-md border bg-primary-P700 p-4"
        />
        {errors.emailConfirmation && (
          <p tw="text-red-400">{errors.emailConfirmation?.message}</p>
        )}
      </div>
      <div className="space-y-3 py-6 ">
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
        {errors.password && <p tw="text-red-400">{errors.password?.message}</p>}
      </div>
      <div className="space-y-3 py-6 ">
        <label htmlFor="passwordConfirmation" className="py-4 capitalize">
          {t("sign up page.password confirmation")}
        </label>
        <input
          required
          type="password"
          {...register("passwordConfirmation")}
          name="passwordConfirmation"
          id="passwordConfirmation"
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
  );
};
