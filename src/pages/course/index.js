import React from "react";
import Sidebar from "../../components/Course/Sidebar";
import CtaButton from "../../components/CtaButton";
import Image from "next/image";
import player from "/public/assets/images/vid-player.png";

const index = () => {
  return (
    <div className="flex md:flex-col">
      <div className="h-full flex-1">
        <div className="w-full leading-none">
          <Image src={player} alt="" layout="responsive" />
        </div>
        <div className="flex justify-between gap-3 bg-white p-4 md:flex-col">
          <div className="space-y-4">
            <p className="text-2xl font-bold">كتاب التوحيد للشيخ عثيمين</p>
            <p className="flex gap-3 font-semibold">
              <span>عدد التقييمات 30544</span>
              <span className="h-full w-[2px] text-gray-500"></span>
              <span>عدد المتدربين المسجلين 106585</span>
            </p>
          </div>
          <div className="space-y-4">
            <CtaButton>إضافة الى السلة (100 ر.س)</CtaButton>
            <p>* شاملا ضريبة القيمة المضافة</p>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default index;
