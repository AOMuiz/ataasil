import { useRouter } from "next/router";
import { sideMenu } from "../../utils/config";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-neutral-N20 basis-[20vw] py-6 h-full">
      <div className="flex justify-center items-center my-3 mx-2">
        <p className="bg-primary-P300 h-12 w-12 rounded-full text-center flex justify-center text-3xl font-semibold">
          ع
        </p>
        <p className="text-lg font-bold my-4 mx-4">عبد الله عبد الرحمان</p>
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
