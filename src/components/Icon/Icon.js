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
} from "react-icons/ai";
import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineBell,
  HiOutlinePencil,
} from "react-icons/hi";
import { BsArrowRight, BsArrowLeft, BsBookmark } from "react-icons/bs";
import { BiChevronDown, BiSearchAlt, BiHomeAlt, BiUser } from "react-icons/bi";
import { FaFacebookF, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineCancel } from "react-icons/md";
import { TbNotes } from "react-icons/tb";

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
