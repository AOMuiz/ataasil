import React, { useState } from "react";
import { VERIFY_STUDENT_EMAIL } from "../../graphql/mutations/studentAuth";
import useTranslation from "next-translate/useTranslation";
import CtaButton from "../CtaButton";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { saveToken, saveUser } from "../../utils/auth";

const VerifyEmail = ({ response }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const router = useRouter();
  const { t } = useTranslation("index");
  const [verifyCode, { data: verificationResponse, error: verificationError }] =
    useMutation(VERIFY_STUDENT_EMAIL);

  const onVerify = async () => {
    try {
      await verifyCode({
        variables: {
          token: response.student_register_sendCode.token,
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
      <CtaButton
        className="mt-3 rounded-3xl bg-[#D5D5D5] py-2 text-center text-white"
        onClick={onVerify}
      >
        Verify Code
      </CtaButton>
    </div>
  );
};

export default VerifyEmail;
