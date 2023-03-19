import HeroCard from "./HeroCard";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className="relative">
      <HeroCarousel />
      <div className="absolute bottom-0 flex translate-y-2/4 gap-5 px-20 text-sm">
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
