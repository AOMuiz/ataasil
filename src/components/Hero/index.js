import React from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div tw="flex gap-5 text-sm">
      <HeroCard />
      <HeroCard />
      <HeroCard />
    </div>
  );
};

export default Hero;
