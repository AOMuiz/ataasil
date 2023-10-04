import { useQuery, useReactiveVar } from "@apollo/client";
import { useState } from "react";
import { profileDetailsVar } from "../graphql/state";
import { STUDENT_PROFILE } from "../graphql/queries/studentProfile";

const useGetProfile = () => {
  const profileDetails = useReactiveVar(profileDetailsVar);
  const {
    data: studentProfileResponse,
    error: studentProfileError,
    loading: studentProfileLoading,
    refetch,
  } = useQuery(STUDENT_PROFILE, {
    onCompleted: (data) => handleProfileCompleted(data),
    onError: (error) => handleVerificationError(error),
  });
  const handleProfileCompleted = (data) => {
    const userProfile = data;
    profileDetailsVar({
      ...profileDetails,
      ...userProfile.student,
    });
    // console.log({ profileDetails, userProfile });
  };

  const handleVerificationError = (error) => {
    console.log({ error, message: error.message });
  };

  return {
    profileDetails,
    studentProfileResponse,
    studentProfileError,
    studentProfileLoading,
    refetch,
  };
};

export default useGetProfile;
