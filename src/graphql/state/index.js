import { makeVar } from "@apollo/client";

export const authStateVar = makeVar({});

export const profileDetailsVar = makeVar({
  username: "",
  jobSector: "",
  dateOfBirth: "",
  phone: "",
  phoneCountryCode: "",
  phoneRelevant: "",
});
