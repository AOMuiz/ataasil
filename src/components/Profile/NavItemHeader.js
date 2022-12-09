import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { styled } from "twin.macro";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import { SidebarItem } from "./NavItem";

const NavItemHeader = ({ item }) => {
  const router = useRouter();
  const { label, icon, slug: headerToPath, subnav } = item;
  const [expanded, setExpand] = useState(
    router.pathname.includes(headerToPath)
  );

  const onExpandChange = (e) => {
    e.preventDefault();
    setExpand((expanded) => !expanded);
  };

  return (
    <SideBarWithSubContainer>
      <div className="flex items-center w-full justify-between">
        <SidebarItem>
          <Link href={`${headerToPath}`}>
            <p className="flex gap-3 items-center">
              <Icon id={`${icon}`} size={35} />
              <span>{label}</span>
            </p>
          </Link>
        </SidebarItem>
        <UnstyledButton onClick={onExpandChange}>
          <NavItemHeaderChevron expanded={expanded}>
            <Icon id={"chevron-down"} size={24} />
          </NavItemHeaderChevron>
        </UnstyledButton>
      </div>
      {expanded && (
        <SubNavContainer>
          {subnav.map((item, index) => (
            <SubNavItem key={index} active={router.pathname === item.slug}>
              <Link href={item.slug}>{item.label}</Link>
            </SubNavItem>
          ))}
        </SubNavContainer>
      )}
    </SideBarWithSubContainer>
  );
};

export default NavItemHeader;

const SideBarWithSubContainer = styled.div`
  height: fit-content;
  transition: height 0.25s;
`;

const SubNavContainer = styled.div`
  padding-inline-start: 2.8rem;
`;

const NavItemHeaderChevron = styled.div`
  padding: 10px;
  margin-inline-end: auto;
  transition: all 0.25s;
  color: #5a5a5a;
  ${(props) =>
    props.expanded &&
    `:first-child {
    transform: rotate(180deg);
  }`}
`;

const SubNavItem = styled.p`
  margin-block: 8px;
  font-weight: 400;
  padding-block: 5px;
  font-size: 18px;
  color: #5a5a5a;
  ${(props) =>
    props.active &&
    `background: linear-gradient(90deg, #A6D1F7 0%, rgba(166, 209, 247, 0) 100%);
     border-color: #016FD0;
     font-weight:700;
     color: #016FD0;
     border-left: 4px solid;
  `};
`;
