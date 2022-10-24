import React from "react";
import Icon from "../Icon";
import Logo from "../Svg/logo";

const BottomNav = () => {
  return (
    <div tw="flex">
      <Logo width={80} height={60} />
      <p tw="flex justify-center items-center border-2 border-primary-P200">
        <span tw="p-2">
          <Icon id={"menu"} />
        </span>
        <span>منتجاتنا</span>
      </p>
    </div>
  );
};

export default BottomNav;
