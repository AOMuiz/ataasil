import React from "react";
import Image from "next/image";
import pen from "/public/assets/images/hero_pen-img.png";
import bg_img from "/public/assets/images/hero_bg.png";
import tw, { styled } from "twin.macro";

const HeroCarousel = () => {
  return (
    <HeroContainer>
      <Image
        src={bg_img}
        alt="carousel image"
        layout="responsive"
        placeholder="blur"
        objectFit="contain"
      />
      <div className="h-3/4">
        <p tw="absolute bottom-1/3 right-1/4 font-extrabold text-2xl text-white">
          العلم الأصيل الذي نزل من النبي صلى الله عليه وسلم إلى أصحابه وعلماء
          هذه الأمة
        </p>
        <div className="absolute top-0 right-0">
          <Image
            src={pen}
            alt="hero pen"
            style={{
              objectFit: "contain",
              maxHeight: "70%",
            }}
          />
        </div>
      </div>
    </HeroContainer>
  );
};

export default HeroCarousel;

const HeroContainer = styled.div`
  position: relative;
`;
