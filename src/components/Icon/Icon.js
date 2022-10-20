import React from "react";
import styled from "styled-components";
import {
  AiFillYoutube,
  AiOutlineSearch,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineClose,
  AiOutlineShopping,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

const icons = {
  search: AiOutlineSearch,
  twitter: AiOutlineTwitter,
  youtube: AiFillYoutube,
  instagram: AiFillInstagram,
  facebook: FaFacebookF,
  "shopping-bag": AiOutlineShopping,
  "chevron-down": BiChevronDown,
  close: AiOutlineClose,
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
