import React from "react";
import Icon from "../Icon";
import Logo from "../Svg/logo";

const BottomNav = () => {
  return (
    <div tw="flex px-16 py-4 justify-between items-center">
      <div tw="flex items-center gap-6">
        <Logo width={80} height={60} tw="cursor-pointer" />
        <p tw="flex justify-center items-center border-2 border-primary-P300 rounded-full px-2 h-auto py-1 cursor-pointer">
          <span tw="p-2">
            <Icon id={"menu"} />
          </span>
          <span>منتجاتنا</span>
        </p>
      </div>
      <div
        tw="flex items-center bg-gray-G20 h-auto rounded-full overflow-hidden py-2 w-auto"
        className="basis-1/3"
      >
        <Icon id={"search"} tw="text-primary-P300 px-3" size={20} />
        <input
          type="text"
          tw="bg-gray-G20 outline-none"
          placeholder="ابحث في المنصة"
        />
      </div>
      <div tw="flex items-center justify-evenly gap-6">
        <p tw="cursor-pointer">تسجيل الدخول</p>
        <p tw="rounded-full bg-primary-P300 w-auto  text-center text-white px-5 py-2 cursor-pointer">
          انضم التأصيل
        </p>
      </div>
    </div>
  );
};

export default BottomNav;
