import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import signupframe from "/public/assets/images/sign_up_frame.png";
import useTranslation from "next-translate/useTranslation";
import robot from "/public/assets/images/robot.png";
import CourseCard from "../../components/CourseCards/CourseCard";
import CtaButton from "../../components/CtaButton";
import { useMutation } from "@apollo/client";
import { CREATE_STUDENT_ACCOUNT } from "../../graphql/mutations/studentAuth";
import { FormSection } from "./form-section";

const SignUp = () => {
  const { t } = useTranslation("index");

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

  const [createStudentAccount, { data: responce, loading, error, reset }] =
    useMutation(CREATE_STUDENT_ACCOUNT);

  const {
    register,
    handleSubmit,
    setValue,
    reset: resetForm,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, password, jobSector, fullName, contact, day, month, year } =
      data;
    const studentInfo = {
      email,
      password,
      jobSector,
      username: fullName,
      dateOfBirth: `${year}-${month}-${day}`,
      phone: `+${contact}`,
    };
    createStudentAccount({ variables: studentInfo });
  };

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
