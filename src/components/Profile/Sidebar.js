import { useRouter } from "next/router";
import { sideMenu } from "../../utils/config";
import SidebarItem from "./SidebarItem";
import { useReactiveVar } from "@apollo/client";
import { getFirstLetters } from "../../utils/helpers";
import { profileDetailsVar } from "../../graphql/state";

const Sidebar = () => {
  const router = useRouter();
  const userProfile = useReactiveVar(profileDetailsVar);
  const letters = getFirstLetters(userProfile.username);
  return (
    <div className="h-full basis-[20vw] bg-neutral-N20 py-6">
      <div className="mx-2 my-3 flex items-center justify-center">
        <p className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-P300 text-center text-lg font-semibold uppercase">
          <span>{`${letters[0] && letters[0]} ${
            letters[1].length ? letters[1] : null
          }`}</span>
        </p>
        <p className="mx-4 my-4 text-lg font-bold">عبد الله عبد الرحمان</p>
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
