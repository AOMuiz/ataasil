import { useRouter } from "next/router";
import { sideMenu } from "../../utils/config";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="h-full basis-[20vw] bg-neutral-N20 py-6">
      <div className="my-3 mx-2 flex items-center justify-center">
        <p className="flex h-12 w-12 justify-center rounded-full bg-primary-P300 text-center text-3xl font-semibold">
          ع
        </p>
        <p className="my-4 mx-4 text-lg font-bold">عبد الله عبد الرحمان</p>
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
