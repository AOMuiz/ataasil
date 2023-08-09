import React from "react";
import Header from "../../components/Header";
import Icon from "../../../public/assets/images/Group 140.svg";
import Image from "next/image";

const Index = () => {
  return (
    <div>
      <div className="mx-32 my-16 flex gap-x-2 font-bold">
        <h1 className="text-2xl">سلة التسوىق(1)</h1>
        <button className="bg-danger-D10">
          <Image src={Icon} width={20} height={20} alt="" />
          حذف الكل
        </button>
      </div>
      <div className="mx-auto my-0 my-24 flex w-5/6 justify-center gap-4 rounded-3xl bg-neutral-N20 p-5 ">
        <div className=" w-1/3 rounded-3xl border bg-white p-6 ">
          <h2 className=" font-normal ">ملخص</h2>
        </div>
        <div className=" w-1/3 rounded-3xl bg-white p-6">the second grid</div>
        <div className=" w-1/3 flex-col space-y-12 rounded-3xl border bg-white px-6 py-8 text-center  ">
          <p className="text-lg font-bold ">ادفع عن طريق الدفع الإلكتروني</p>
          <button className=" w-full rounded-lg bg-primary-P200 p-4 text-lg text-white">
            تأكيد الشراء
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
