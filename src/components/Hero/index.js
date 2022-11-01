import React from "react";
import { styled } from "twin.macro";
import HeroCard from "./HeroCard";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className="relative">
      <HeroCarousel />
      <div tw="flex gap-5 text-sm px-20 absolute -bottom-20">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
