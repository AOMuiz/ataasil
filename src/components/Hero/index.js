import React from "react";
import HeroCard from "./HeroCard";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className="relative">
      <HeroCarousel />
      <div tw="flex gap-5 text-sm px-14 absolute -bottom-20">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
