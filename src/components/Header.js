import Image from "next/image";
import React from "react";
import tw, { styled } from "twin.macro";
// import LogoDark from "./Svg/LogoDark";

const Header = ({ heading }) => {
  return (
    <Wrapper>
      <p className="font-extrabold text-5xl text-white">{heading}</p>
      <img src="/assets/images/logo-2.svg" alt="" className="w-[300px]" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/assets/images/deepmind.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3rem;
  /* background-color: yellowgreen; */
`;
