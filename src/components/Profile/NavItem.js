import Link from "next/link";
import NavItemHeader from "./NavItemHeader";
import Icon from "../Icon";
import tw, { styled } from "twin.macro";

const NavItem = ({ item, active, children }) => {
  if (children) {
    return <NavItemHeader item={item} />;
  }

  return (
    <SidebarItem active={active}>
      <Link href={`${item.slug}`}>
        <p className="flex items-center gap-3 w-full">
          <Icon id={`${item.icon}`} size={35} />
          <span>{item.label}</span>
        </p>
      </Link>
    </SidebarItem>
  );
};

export default NavItem;

const SidebarItem = styled.li(({ active }) => [
  tw`flex gap-2 items-center text-gray-G30 py-2 px-2  cursor-pointer`,
  active &&
    `background: linear-gradient(90deg, #A6D1F7 0%, rgba(166, 209, 247, 0) 100%);
     border-color: #016FD0;
     font-weight:700;
     color: #016FD0;
     border-left: 4px solid;
  `,
]);
