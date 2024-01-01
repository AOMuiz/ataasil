import { makeVar } from "@apollo/client";
import { isLoggedIn } from "../../utils/auth";

export const authStateVar = makeVar({ authenticated: isLoggedIn() });
export const navbarHeightVar = makeVar({ height: "" });

export const profileDetailsVar = makeVar({
  username: "",
  jobSector: "",
  dateOfBirth: "",
  phone: "",
  phoneCountryCode: "",
  phoneRelevant: "",
});

export const presentCourseDetailVar = makeVar([]);

export const presentCourseSectionTest = makeVar({ sectionId: "", test: [] });

export const coursePreviewVar = makeVar({
  openPreview: false,
  setOpenPreview: () => null,
});

export const presentCourseFileDetail = makeVar({
  sectionId: "",
  fileType: "",
  fileUrl: "",
  fileTitle: "",
  fileDescription: "",
  isPreview: false,
});
export const cartItemsVar = makeVar([]);
