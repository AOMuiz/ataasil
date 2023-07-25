import React, { useState } from "react";
import {
  REVERIFY_STUDENT_EMAIL,
  VERIFY_STUDENT_EMAIL,
} from "../../graphql/mutations/studentAuth";
import useTranslation from "next-translate/useTranslation";
import CtaButton from "../CtaButton";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { saveToken, saveUser } from "../../utils/auth";

const VerifyEmail = ({ response }) => {
  const [verificationCode, setVerificationCode] = useState(
    response.student_register_sendCode.code
  );
  const [verificationToken, setVerificationToken] = useState(
    response.student_register_sendCode.token
  );
  const router = useRouter();
  // 20bbb5b91d37d3a815424d9a1a85b6df8d18a599b145531cedd7183c82ac
  const { t } = useTranslation("index");
  const [verifyCode, { data: verificationResponse, error: verificationError }] =
    useMutation(VERIFY_STUDENT_EMAIL);
  const [
    reverifyCode,
    { data: reverificationResponse, error: reverificationError },
  ] = useMutation(REVERIFY_STUDENT_EMAIL);

  const onVerify = async () => {
    try {
      await verifyCode({
        variables: {
          token: verificationToken,
          code: verificationCode,
        },
      });

      if (!verificationResponse) return;
      if (verificationResponse) {
        await saveToken(verificationResponse.student_register_verifyCode.token);
        await saveUser(
          verificationResponse.student_register_verifyCode.data._id
        );
      }
      router.push("/dashboard");
    } catch (error) {
      console.log({
        error: error.message,
      });
      toast.error(error.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  const onReverify = async () => {
    try {
      await reverifyCode({ variables: { token: verificationToken } });
      setVerificationCode(
        reverificationResponse.student_register_resendCode.code
      );
      setVerificationToken(
        reverificationResponse.student_register_resendCode.token
      );
    } catch (error) {
      console.log({ response, verificationCode, verificationToken });
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
        onChange={(e) => setVerificationCode(e.target.value)}
        value={verificationCode}
      />
      <div className="mt-2 flex items-baseline justify-between gap-3">
        <CtaButton
          className="mt-3 rounded-3xl bg-[#D5D5D5] py-2 text-center text-white"
          onClick={onVerify}
        >
          Verify Code
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
