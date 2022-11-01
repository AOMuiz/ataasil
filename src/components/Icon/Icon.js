import React from "react";
import styled from "styled-components";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineClose,
  AiOutlineShopping,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiChevronDown, BiSearchAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
  AiFillStar,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { FaFacebookF, FaGreaterThan, FaLessThan } from "react-icons/fa";
const icons = {
  search: BiSearchAlt,
  twitter: AiOutlineTwitter,
  youtube: AiFillYoutube,
  linkedIn: AiFillLinkedin,
  instagram: AiFillInstagram,
  facebook: FaFacebookF,
  "shopping-bag": AiOutlineShopping,
  "chevron-down": BiChevronDown,
  close: AiOutlineClose,
  menu: AiOutlineMenu,
  star: AiFillStar,
  "greater-than": FaGreaterThan,
  "less-than": FaLessThan,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
