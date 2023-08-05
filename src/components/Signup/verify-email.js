import React, { useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { toast } from "react-toastify";
import { useMutation, useReactiveVar } from "@apollo/client";

import {
  REVERIFY_STUDENT_EMAIL,
  VERIFY_STUDENT_EMAIL,
} from "../../graphql/mutations/studentAuth";
import CtaButton from "../CtaButton";
import { saveToken, saveUser } from "../../utils/auth";
import { authStateVar, profileDetailsVar } from "../../graphql/state";

const VerifyEmail = () => {
  const router = useRouter();
  const { t } = useTranslation("index");
  const authState = useReactiveVar(authStateVar);
  const [verificationCodeField, setverificationCodeField] = useState("");

  const [verifyCode, { loading: verificationLoading }] = useMutation(
    VERIFY_STUDENT_EMAIL,
    {
      onCompleted: (data) => handleVerificationCompleted(data),
      onError: (error) => handleVerificationError(error),
    }
  );

  const [
    reverifyCode,
    { data: reverificationResponse, error: reverificationError },
  ] = useMutation(REVERIFY_STUDENT_EMAIL, {
    onCompleted: (data) =>
      authStateVar({
        ...authState,
        verificationToken: data.student_register_resendCode.token,
      }),
  });

  const setVerificationCode = (e) => {
    setverificationCodeField(e.target.value);
    console.log(verificationCodeField);
  };

  const handleVerificationCompleted = (data) => {
    const { token, data: user } = data.student_register_verifyCode;
    authStateVar({
      ...authState,
      verificationCode: verificationCodeField,
    });
    profileDetailsVar({
      ...profileDetailsVar,
      username: user.username,
      email: user.email,
    });
    saveToken(token);
    saveUser(user._id);
    router.push("/dashboard");
    toast.success("Verified: Registration completed", {
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const handleVerificationError = (error) => {
    toast.error(error.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const onReverify = async () => {
    try {
      await reverifyCode({ variables: { token: authState.verificationToken } });
    } catch (error) {
      // console.log({ response, verificationToken });
      toast.error(error.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="w-1/2 bg-white px-20 py-20 shadow-lg 2md:w-full sm:px-10">
      <h1 className="py-4 text-3xl font-bold">Verify Code Sent</h1>
      <input
        type="text"
        name="verificationCode"
        id="verificationCode"
        placeholder="Enter verification code"
        className="h-[60px] w-full rounded-md border bg-primary-P700 p-4"
        onChange={(e) => setVerificationCode(e)}
        value={verificationCodeField}
      />
      <div className="mt-2 flex items-baseline justify-between gap-3">
        <CtaButton
          className="mt-3 rounded-3xl bg-[#D5D5D5] py-2 text-center text-white"
          onClick={() =>
            verifyCode({
              variables: {
                token: authState.verificationToken,
                code: verificationCodeField,
              },
            })
          }
        >
          {verificationLoading ? "Verifying..." : "Verify Code"}
        </CtaButton>
        <p>
          Didn&apos;t get an email yet?{" "}
          <span
            className="cursor-pointer text-primary-P300"
            onClick={onReverify}
          >
            Resend Code
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
