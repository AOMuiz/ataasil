import Image from "next/image";
import { useEffect, useState } from "react";
import { styled } from "twin.macro";
import SectionDivider from "../SectionDivider";
import testimonialImg from "/public/assets/images/content-img.png";
import Icon from "../Icon";
import { ChangeProfileInput } from "./ChangeProfileInput";
import { useReactiveVar, useMutation, useQuery } from "@apollo/client";
import { profileDetailsVar } from "../../graphql/state";
import { STUDENT_PROFILE } from "../../graphql/queries/studentProfile";
import { STUDENT_UPDATE_PROFILE } from "../../graphql/mutations/studentProfile";
import { toast } from "react-toastify";
import CtaButton from "../CtaButton";

const UserProfile = () => {
  const profileDetails = useReactiveVar(profileDetailsVar);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...profileDetails });
  const [updateProfile, { data, loading: updateLoading, error }] = useMutation(
    STUDENT_UPDATE_PROFILE,
    {
      onCompleted: (result) => {
        console.log({ complete: result });
      },
    }
  );

  const {
    data: studentProfileResponse,
    error: studentProfileError,
    loading,
    refetch,
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

  const handleSubmit = () => {
    const { username, jobSector, dateOfBirth, phone } = formData;
    updateProfile({
      variables: {
        username,
        jobSector,
        dateOfBirth,
        phone,
      },
    }).then((result) => {
      setEditMode(false);
      toast.success(`Profile update successful`, {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      refetch();
      console.log({ result, profileDetails });
    });
  };

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!loading) {
      console.log(profileDetails);
    }
  }, [loading, profileDetails]);

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
      <div className="my-6 flex gap-4 md:flex-wrap">
        <div className="flex h-80 max-w-[250px] flex-1 flex-col items-center justify-center gap-8 rounded-md bg-neutral-N20 p-8">
          <div className="flex h-28 w-28 border-spacing-5 items-center justify-center rounded-full border-[6px] border-white bg-primary-P300">
            <Image
              src={testimonialImg}
              alt="profile image"
              objectFit="contain"
              className=""
            />
          </div>
          <button className="flex w-auto cursor-pointer items-center gap-3 rounded-full border-4 border-white bg-primary-P300 px-4 py-3 text-center font-bold text-white">
            <span>رفع صورة جديدة</span>
            <Icon id={"upload"} size={23} />
          </button>
        </div>
        <InfoContainer className="h-80 space-y-2 overflow-y-scroll px-3">
          <ChangeProfileInput
            name="username"
            htmlFor="username"
            placeholder={"الاسم الكامل"}
            label={"الاسم الكامل"}
            disabled={!editMode}
            value={formData.username}
            onChange={handleChange}
            autoFocus={true}
          />
          <ChangeProfileInput
            placeholder={"الاسم الكامل بالانجليزية"}
            label={"الاسم الكامل بالانجليزية"}
            disabled={true}
            value={formData.username && formData?.username}
            onChange={handleChange}
          />
          <ChangeProfileInput
            placeholder={"البريد الإلكتروني"}
            label={"البريد الإلكتروني"}
            disabled={true}
            value={formData?.email && formData?.email}
            onChange={handleChange}
          />
          <ChangeProfileInput
            placeholder={"قطاع الوظيفة"}
            label={"قطاع الوظيفة"}
            disabled={true}
            value={formData.jobSector}
            onChange={handleChange}
          />
        </InfoContainer>
        <div className="w-fit  space-y-5">
          <div className="flex gap-5">
            <ChangeProfileInput
              name="phoneRelevant"
              htmlFor="phoneRelevant"
              label="الجوال"
              disabled={!editMode}
              placeholder="رقم الجوال"
              type="tel"
              value={formData.phoneRelevant}
              onChange={handleChange}
            />

            <div>
              <ChangeProfileInput
                label="الكود"
                placeholder="+234"
                disabled={!editMode}
                value={formData.phoneCountryCode}
              />
            </div>
          </div>
          <div className="">
            <ChangeProfileInput
              name="dateOfBirth"
              htmlFor="dateOfBirth"
              type="date"
              disabled={!editMode}
              placeholder="2010-12-12"
              label="تاريخ الميلاد"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        {editMode ? (
          <div className="flex gap-5">
            <CtaButton onClick={handleSubmit} disabled={updateLoading}>
              {updateLoading ? "Submitting" : "Update Profile"}
            </CtaButton>
            <button
              className="rounded-full border-2 border-red-300 bg-slate-50 px-3 py-3 transition hover:bg-red-200"
              onClick={handleToggleEditMode}
            >
              Cancel
            </button>
          </div>
        ) : (
          <CtaButton onClick={handleToggleEditMode}>Edit Profile</CtaButton>
        )}

        {error && <p>Error: {error.message}</p>}
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
