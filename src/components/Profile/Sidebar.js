import { useRouter } from "next/router";
import { sideMenu } from "../../utils/config";
import SidebarItem from "./SidebarItem";
import { useReactiveVar } from "@apollo/client";
import { cn, getFirstLetters, isNotNullOrUndefined } from "../../utils/helpers";
import { navbarHeightVar, profileDetailsVar } from "../../graphql/state";
import * as Avatar from "@radix-ui/react-avatar";
import Icon from "../Icon";

const Sidebar = ({ isMobile, setIsmobile }) => {
  const router = useRouter();
  const navbarHeight = useReactiveVar(navbarHeightVar);
  const { username } = useReactiveVar(profileDetailsVar);
  const letters = getFirstLetters(username);
  let firstLetter = isNotNullOrUndefined(letters[0]) && letters[0];
  let secondLetter = isNotNullOrUndefined(letters[1]) && letters[1];
  let height = `${100 - navbarHeight}vh`;

  return (
    <div
      className={cn(
        `h-full max-h-screen min-w-[250px] basis-[20vw] bg-neutral-N20 py-6 md:hidden`,
        isMobile &&
          `bottom-0 top-0 z-30 animate-slideRightAndFade md:absolute md:block`
      )}
    >
      <div className="mx-2 my-3 flex items-center">
        <Avatar.Root className="inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full bg-primary-P300 align-middle">
          <Avatar.Fallback className="leading-1 flex h-full w-full items-center justify-center  bg-primary-P300 text-lg  font-semibold uppercase">
            {firstLetter && <span>{firstLetter}</span>}
            {secondLetter && <span>{secondLetter}</span>}
          </Avatar.Fallback>
        </Avatar.Root>
        <p className="mx-4 my-4 text-lg  capitalize">{username}</p>
        {isMobile && (
          <button onClick={() => setIsmobile(false)}>
            <Icon id={"close"} />
          </button>
        )}
      </div>
      <ul className="flex flex-col gap-4">
        {sideMenu.map((item, key) => (
          <SidebarItem
            key={`${item.label}-${key}`}
            item={item}
            active={router.pathname === item.slug}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
