import { useQuery, useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { profileDetailsVar } from "../graphql/state";
import { STUDENT_PROFILE } from "../graphql/queries/studentProfile";
import { getUser } from "../utils/auth";

const useGetProfile = () => {
  const profileDetails = useReactiveVar(profileDetailsVar);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  if (getUser) {
    const {
      data: studentProfileResponse,
      error: studentProfileError,
      loading: studentProfileLoading,
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
      setFetchSuccess(true);
      console.log({ profileDetails, userProfile });
    };
    return [
      profileDetails,
      studentProfileResponse,
      studentProfileError,
      studentProfileLoading,
      fetchSuccess,
    ];
  }

  return [profileDetails, fetchSuccess];
};

export default useGetProfile;
