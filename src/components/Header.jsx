import Image from "next/image";
import tw, { styled } from "twin.macro";
import { QUERIES } from "../utils/constants";
// import LogoDark from "./Svg/LogoDark";

const Header = ({ heading }) => {
  return (
    <Wrapper>
      <p className="text-5xl font-extrabold text-white md:text-3xl">
        {heading}
      </p>
      <img
        src="/assets/images/logo-2.svg"
        alt=""
        className="w-[300px] md:w-[150px]"
      />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/assets/images/deepmind.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3rem;
  @media ${QUERIES.md} {
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
`;
