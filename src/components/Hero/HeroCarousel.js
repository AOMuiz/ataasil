import Image from "next/image";
import pen from "/public/assets/images/hero_pen-img.png";
import bg_img from "/public/assets/images/home_hero_img.png";
import tw, { styled } from "twin.macro";

const HeroCarousel = () => {
  return (
    <HeroContainer>
      <Image
        src={bg_img}
        alt="carousel image"
        layout="fill"
        placeholder="blur"
        className="block object-cover"
      />

      <div className="h-3/4 md:h-[revert]">
        <p className="absolute bottom-1/3 right-1/4 text-2xl font-extrabold text-white md:text-lg">
          العلم الأصيل الذي نزل من النبي صلى الله عليه وسلم إلى أصحابه وعلماء
          هذه الأمة
        </p>
        {/* <div className="absolute top-0 right-0">
          <Image src={pen} alt="hero pen" objectFit="fill" height={450} />
        </div> */}
      </div>
    </HeroContainer>
  );
};

export default HeroCarousel;

const HeroContainer = styled.div`
  position: relative;
  min-height: 350px;
`;
