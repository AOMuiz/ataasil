import React from "react";

import useTranslation from "next-translate/useTranslation";

import Header from "../../components/Header";

import IntroSection from "../../components/About/IntroSection";
import FromUs from "../../components/About/FromUs";
import OurMessage from "../../components/About/OurMessage";
import OurProgram from "../../components/About/OurProgram";
import ProgramListStep from "../../components/About/ProgramListStep";

const About = () => {
  const { t } = useTranslation("index");
  return (
    <div>
      <Header heading={"نبذة عنا"} />
      <IntroSection />
      <FromUs />
      <OurMessage />
      <OurProgram />
      <ProgramListStep />
    </div>
  );
};

export default About;
