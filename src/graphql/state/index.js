import { makeVar } from "@apollo/client";
import { isLoggedIn } from "../../utils/auth";

export const authStateVar = makeVar({ authenticated: isLoggedIn() });

export const profileDetailsVar = makeVar({
  username: "",
  jobSector: "",
  dateOfBirth: "",
  phone: "",
  phoneCountryCode: "",
  phoneRelevant: "",
});

export const presentCourseDetailVar = makeVar([]);

export const presentCourseFileDetail = makeVar({
  fileType: "",
  fileUrl: "",
  fileTitle: "",
  fileDescription: "",
});
