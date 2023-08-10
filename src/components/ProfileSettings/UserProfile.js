import Image from "next/image";
import { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import FormInput from "../../components/FormInput";
import SectionDivider from "../SectionDivider";
import testimonialImg from "/public/assets/images/content-img.png";
import Icon from "../Icon";
import { ChangeProfileInput } from "./ChangeProfileInput";
import { useReactiveVar, useMutation, useQuery } from "@apollo/client";
import { profileDetailsVar } from "../../graphql/state";
import { STUDENT_PROFILE } from "../../graphql/queries/studentProfile";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [changeDetails, setChangeDetails] = useState(false);
  const profileDetails = useReactiveVar(profileDetailsVar);
  const {
    data: studentProfileResponse,
    error: studentProfileError,
    loading,
  } = useQuery(STUDENT_PROFILE, {
    onCompleted: (data) => handleProfileCompleted(data),
    // onError: (error) => handleVerificationError(error),
  });

  const handleProfileCompleted = (data) => {
    const userProfile = data;
    profileDetailsVar({
      ...profileDetails,
      ...userProfile.student,
    });
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!loading) {
      console.log(profileDetails);
    }
  }, [profileDetails]);

  if (loading)
    return (
      <div className="h-screen">
        <h1 className="text-center text-4xl font-bold">Loading...</h1>
      </div>
    );

  if (studentProfileError) return `Error! ${studentProfileError.message}`;

  return (
    <div>
      <p className="my-7 text-2xl font-bold">الملف الشخصي</p>
      <SectionDivider />
      <div className="my-6 grid grid-flow-col gap-6">
        <div className="flex h-80 flex-col items-center justify-center gap-8 rounded-md bg-neutral-N20 p-8">
          <div className="flex h-28 w-28 border-spacing-5 items-center justify-center rounded-full border-[6px] border-white bg-primary-P300">
            <Image
              src={testimonialImg}
              alt="testimonial image"
              objectFit="contain"
              className=""
            />
          </div>
          <button className="flex w-auto cursor-pointer items-center gap-3 rounded-full border-4 border-white bg-primary-P300 px-6 py-3 text-center text-white">
            <span>رفع صورة جديدة</span>
            <Icon id={"upload"} size={25} />
          </button>
        </div>
        <InfoContainer className="h-80 overflow-y-scroll">
          <div className="mx-4 flex flex-col gap-5">
            <ChangeProfileInput
              placeholder={"الاسم الكامل"}
              label={"الاسم الكامل"}
              disabled={!changeDetails}
              value={profileDetails.username && profileDetails?.username}
              onChange={onChange}
            />
            <ChangeProfileInput
              placeholder={"الاسم الكامل بالانجليزية"}
              label={"الاسم الكامل بالانجليزية"}
              disabled={!changeDetails}
              value={profileDetails.username && profileDetails?.username}
              onChange={onChange}
            />
            <ChangeProfileInput
              placeholder={"البريد الإلكتروني"}
              label={"البريد الإلكتروني"}
              disabled={!changeDetails}
              value={profileDetails?.email && profileDetails?.email}
              onChange={onChange}
            />
            <div>
              <label
                htmlFor=""
                className="text-gray-G3 mb-3 inline-block text-sm font-bold text-gray-G30"
              >
                قطاع الوظيفة
              </label>
              <div className="flex items-center gap-2 rounded border-2 bg-[#F9F9F9] p-2">
                <select className="flex-1 bg-[#F9F9F9] px-2 py-1 text-neutral-N70 outline-none">
                  <option value="قطاع الوظيفة">قطاع الوظيفة</option>
                </select>
              </div>
            </div>
          </div>
        </InfoContainer>
        <div className="grid w-3/4 grid-cols-2 gap-x-2">
          <div className="flex flex-col">
            <FormInput
              label="الجوال"
              placeholder="رقم الجوال"
              disabled={true}
              value={profileDetails.phoneRelevant}
            />
          </div>
          <div className="flex flex-col">
            <FormInput
              label="الكود"
              placeholder="+234"
              disabled={true}
              value={profileDetails.phoneCountryCode}
            />
          </div>
          <div className="flex flex-col">
            <FormInput
              type="date"
              disabled={true}
              placeholder="2010-12-12"
              label="تاريخ الميلاد"
              value={profileDetails.dateOfBirth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

const InfoContainer = styled.div`
  scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    width: 6px;
    background: #f9f9f9;
    border-radius: 10px;
    padding-inline-start: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(49, 192, 204, 1);
    border-radius: 5px;
  }
`;
