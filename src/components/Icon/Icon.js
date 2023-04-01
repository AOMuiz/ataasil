import styled from "styled-components";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineClose,
  AiOutlineShopping,
  AiOutlineMenu,
  AiFillStar,
  AiFillLinkedin,
  AiOutlineHeart,
  AiOutlineDollarCircle,
  AiOutlineCloudUpload,
  AiOutlineEye,
} from "react-icons/ai";

import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineBell,
  HiOutlinePencil,
} from "react-icons/hi";

import {
  BiChevronDown,
  BiSearchAlt,
  BiHomeAlt,
  BiUser,
  BiChevronUp,
} from "react-icons/bi";

import { BsArrowRight, BsArrowLeft, BsBookmark } from "react-icons/bs";
import { IoOptionsOutline } from "react-icons/io5";
import { FaFacebookF, FaGreaterThan, FaLessThan, FaSort } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineCancel } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { HiOutlineArrowRight } from "react-icons/hi";

const icons = {
  search: BiSearchAlt,
  twitter: AiOutlineTwitter,
  youtube: AiFillYoutube,
  linkedIn: AiFillLinkedin,
  instagram: AiFillInstagram,
  facebook: FaFacebookF,
  "shopping-bag": AiOutlineShopping,
  "chevron-down": BiChevronDown,
  "chevron-up": BiChevronUp,
  close: AiOutlineClose,
  cancel: MdOutlineCancel,
  book: HiOutlineBookOpen,
  clock: HiOutlineClock,
  right: BsArrowRight,
  left: BsArrowLeft,
  menu: AiOutlineMenu,
  star: AiFillStar,
  "greater-than": FaGreaterThan,
  "less-than": FaLessThan,
  location: HiOutlineLocationMarker,
  dashboard: MdOutlineDashboard,
  home: BiHomeAlt,
  user: BiUser,
  bookmark: BsBookmark,
  favorite: AiOutlineHeart,
  dollar: AiOutlineDollarCircle,
  bell: HiOutlineBell,
  certificate: TbNotes,
  pencil: HiOutlinePencil,
  upload: AiOutlineCloudUpload,
  options: IoOptionsOutline,
  eyeOpen: AiOutlineEye,
  sort: FaSort,
  rightArrow: HiOutlineArrowRight,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    // fix dom nesting of div inside other element when using the icon component
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
