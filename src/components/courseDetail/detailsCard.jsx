import React from "react";
import Image from "next/image";
import CtaButton from "../CtaButton";
import Icon from "../Icon";

const DetailsCard = ({ courseDetail }) => {
  return (
    <div className="min-w-[300px] space-y-3 rounded-md p-3 shadow-xl">
      <div className="relative aspect-square overflow-hidden rounded-md border-b">
        {courseDetail && (
          <Image
            src={`${courseDetail?.course.banner}`}
            alt="banner"
            layout="fill"
          />
        )}
      </div>
      <div className="space-y-2 border-b pb-3">
        <p className="text-2xl font-bold">${courseDetail?.course.price}</p>
        <div className="space-y-4">
          <CtaButton className="w-full rounded-md bg-[#35CCBC] font-semibold">
            Add to Cart
          </CtaButton>
          <CtaButton className="w-full rounded-md border-2 border-gray-500 bg-transparent font-semibold text-neutral-600">
            Buy Now
          </CtaButton>
        </div>
      </div>
      <div className="mb-2 border-b pb-3">
        <p className="mb-3 text-lg font-semibold">تتضمن هذه الدورة</p>
        <ul className="space-y-1">
          <li className="flex items-center gap-3">
            <Icon id={"wallet"} size={30} color={"#35CCBC"} />{" "}
            <span>ضمان استعادة الاموال</span>
          </li>
          <li className="flex items-center gap-3">
            <Icon id={"videolight"} size={30} color={"#35CCBC"} />{" "}
            <span>9.5 ساعة فيديو حسب الطلب</span>
          </li>
          <li className="flex items-center gap-3">
            <Icon id={"trophy"} size={30} color={"#35CCBC"} />{" "}
            <span>95 الموارد القابلة للتحميل</span>
          </li>
          <li className="flex items-center gap-3">
            <Icon id={"mobile"} size={30} color={"#35CCBC"} />{" "}
            <span>الوصول على جميع الأجهزة</span>
          </li>
          <li className="flex items-center gap-3">
            <Icon id={"certificateLight"} size={30} color={"#35CCBC"} />{" "}
            <span>شهادة إتمام</span>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <p className="text-lg md:w-full">شارك هذه الدورة</p>
        <div className="flex  gap-3 text-xl text-white md:flex-wrap">
          <Icon
            color={"#35CCBC"}
            id={"youtube"}
            className="cursor-pointer text-2xl"
          />
          <Icon
            color={"#35CCBC"}
            id={"linkedIn"}
            className="cursor-pointer text-2xl"
          />
          <Icon
            color={"#35CCBC"}
            id={"facebook"}
            className="cursor-pointer text-2xl"
          />
          <Icon
            color={"#35CCBC"}
            id={"instagram"}
            className="cursor-pointer text-2xl"
          />
          <Icon
            color={"#35CCBC"}
            id={"twitter"}
            className="cursor-pointer text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
