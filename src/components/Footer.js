import React from "react";
import LogoDark from "./Svg/LogoDark";
import Image from "next/image";
import Icon from "./Icon";
import googleplay from "/public/assets/images/googleplay.png";
import appstore from "/public/assets/images/appstore.png";

const Footer = () => {
  return (
    <section className="bg-[#3A3B50] px-20 py-10">
      <div className="grid grid-flow-col-dense pb-5 gap-8">
        <div>
          <LogoDark />
          <p className="text-white my-3">حمل تطبيقنا</p>
          <div className="flex gap-3">
            <Image src={googleplay} alt="googleplay" />
            <Image src={appstore} alt="appstore" />
          </div>
        </div>
        <div className="text-white text-lg">
          <p className="font-bold mb-4">نبذة عنا</p>
          <ul>
            <li className="cursor-pointer pb-1">تواصل معنا</li>
            <li className="cursor-pointer pb-1">نبذة عنا</li>
            <li className="cursor-pointer pb-1">انضم إلينا</li>
            <li className="cursor-pointer pb-1">حجز موعد شخصي</li>
          </ul>
        </div>
        <div className="text-lg text-white">
          <p className="font-bold mb-4">دعم</p>
          <ul>
            <li className="cursor-pointer pb-1">مركز المساعدة</li>
            <li className="cursor-pointer pb-1">سياسة الخصوصية</li>
            <li className="cursor-pointer pb-1">الظروف</li>
            <li className="cursor-pointer pb-1">دليل الاستخدام</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-bold text-lg w-auto">
            انضم إلى نشرتنا الإخبارية للحصول على آخر تحديثات الدورات
          </p>
          <div className="relative my-2">
            <input
              type="text"
              placeholder="أدخل عنوان بريدك الإلكتروني"
              className="p-4 outline-none placeholder:p-2 w-full my-5 rounded-l-full"
            />
            <button className="bg-primary-P300  py-4 px-5 rounded-full text-white absolute left-0 -bottom-2 -translate-y-1/2">
              إرسال
            </button>
          </div>
          <div tw="flex gap-3  text-white text-xl items-center justify-center">
            <p className="text-lg m">وسائل التواصل الاجتماعي</p>
            <Icon id={"youtube"} tw="cursor-pointer" />
            <Icon id={"linkedIn"} tw="cursor-pointer" />
            <Icon id={"facebook"} tw="cursor-pointer" />
            <Icon id={"instagram"} tw="cursor-pointer" />
            <Icon id={"twitter"} tw="cursor-pointer" />
          </div>
        </div>
      </div>
      <div>
        <div className="border border-white"></div>
        <p className="text-lg text-center text-white mt-5">
          جميع الحقوق محفوظة لجامعة التأصيل <span>&#169;</span> 2022
        </p>
      </div>
    </section>
  );
};

export default Footer;
