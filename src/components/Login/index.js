import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useMutation, useReactiveVar } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import Frame from "../../../public/assets/images/Frame.png";
import useTranslation from "next-translate/useTranslation";
import Icon from "../Icon";
import SectionHeader from "../SectionHeader";
import CourseCard from "../CourseCards/CourseCard";
import CtaButton from "../CtaButton";
import FormInput from "./LoginFormInput";

import { AUTHENTICATE_STUDENT } from "../../graphql/mutations/studentAuth";
import { profileDetailsVar } from "../../graphql/state";
import { saveToken, saveUser } from "../../utils/auth";

const LoginPage = () => {
  const { t } = useTranslation("index");
  const [authenticateAccount, { data: response, loading, error, reset }] =
    useMutation(AUTHENTICATE_STUDENT, {
      onCompleted: (data) => handleLoginCompleted(data),
      onError: (error) => handleLoginError(error),
    });
  const router = useRouter();
  const profileDetailsState = useReactiveVar(profileDetailsVar);

  const schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().max(25).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleLoginCompleted = (data) => {
    const { token, data: user } = data.student_login;
    profileDetailsVar({
      ...profileDetailsState,
      username: user.username,
      email: user.email,
    });
    saveToken(token);
    saveUser(user._id);
    toast.success("Succesfully Logged In", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    router.push("/dashboard");
  };

  const handleLoginError = (error) => {
    toast.error(error.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log({
      email,
      password,
    });
    const loginInfo = {
      email,
      password,
    };
    try {
      await authenticateAccount({ variables: loginInfo });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="bg-primary-P700 px-20 pt-16 2md:px-10 md:px-6">
        <div className="flex flex-row items-center justify-between gap-2 bg-white 2md:px-3">
          <div className="py-4 2md:w-full">
            <div className="flex flex-row items-center gap-5 pr-7 ltr:pl-5 md:pr-0">
              <Icon
                id={"rightArrow"}
                className="cursor-pointer self-start text-primary-P300"
                color="#31C0CC"
                size="30"
              />
              <SectionHeader className="text-lg" title={t("login.sign in")} />
            </div>
            <form
              className="pr-20 ltr:pl-5 md:pr-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormInput
                register={register}
                errors={errors.email}
                label={t("login.identity")}
                placeholder={t("login.identity")}
                type={"email"}
                id="email"
              />

              <FormInput
                register={register}
                errors={errors.password}
                label={t("login.password")}
                placeholder={t("login.password")}
                type={"password"}
                id="password"
              />

              <div className="flex items-center justify-start gap-16 text-center md:flex-wrap md:gap-8">
                <CtaButton className="w-fit font-bold" btnType="submit">
                  {t("login.sign in")}
                </CtaButton>
                <div>
                  <p className="text-sm font-bold text-gray-G30">
                    <span className="cursor-pointer hover:underline">
                      {t("login.forgot password")}
                    </span>
                    &nbsp; {t("login.or")} &nbsp;
                    <Link
                      href="/signup"
                      className="cursor-pointer hover:underline"
                    >
                      {t("login.create")}
                    </Link>
                  </p>
                </div>
              </div>
            </form>
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
