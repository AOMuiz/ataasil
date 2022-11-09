import React from "react";
import useTranslation from "next-translate/useTranslation";
import Header from "../../components/Header";
import WhyUs from "../../components/WhyUs";

const About = () => {
  const { t } = useTranslation("index");
  return (
    <div>
      <Header heading={"نبذة عنا"} />
      <WhyUs />
    </div>
  );
};

export default About;
