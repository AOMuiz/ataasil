import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Image from "next/image";
import Frame from "../../public/assets/images/Frame.png";
import useTranslation from "next-translate/useTranslation";
import Icon from "../components/Icon";
import SectionHeader from "./SectionHeader";
import CourseCard from "./CourseCards/CourseCard";
import CtaButton from "./CtaButton";

const LoginPage = () => {
  const { t } = useTranslation("index");
  const schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().min(5).max(25).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
              <label
                htmlFor="email"
                className="pb-4 text-sm font-bold text-gray-G30"
              >
                {t("login.identity")}
              </label>
              <div className="pb-20 md:pb-6">
                <input
                  {...register("email")}
                  id="email"
                  type="text"
                  placeholder={t("login.identity")}
                  className="w-full rounded-lg border-2 bg-primary-P700 p-4 text-gray-G30 outline-none placeholder:text-lg placeholder:placeholder-gray-G30 2md:w-2/3 md:w-full"
                />
                {errors.email && (
                  <p tw="text-red-400">{errors.email?.message}</p>
                )}
              </div>
              <label
                htmlFor="password"
                className="pb-4 text-sm font-bold text-gray-G30"
              >
                {t("login.password")}
              </label>
              <div className="pb-16 md:pb-6">
                <input
                  {...register("password")}
                  id="password"
                  type="password"
                  placeholder={t("login.password")}
                  className="w-full rounded-lg border-2 bg-primary-P700 p-4 outline-none placeholder:text-lg placeholder:placeholder-gray-G30 2md:w-2/3 md:w-full"
                />
                {errors.password && (
                  <p tw="text-red-400">{errors.password?.message}</p>
                )}
              </div>
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
                    <span className="cursor-pointer hover:underline">
                      {t("login.create")}
                    </span>
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
