import React from "react";
import Header from "../../components/Header";
import Icon from "../../../public/assets/images/Group 140.svg";
import Image from "next/image";

const Index = () => {
  return (
    <div>
      <div className="my-16 mx-32 font-bold flex gap-x-2">
        <h1 className="text-2xl">سلة التسوىق(1)</h1>
        <button className="bg-danger-D10">
          <Image src={Icon} width={20} height={20} />
          حذف الكل
        </button>
      </div>
      <div className="p-5 my-24 bg-neutral-N20 rounded-3xl my-0 mx-auto flex w-5/6 gap-4 justify-center ">
        <div className=" p-6 w-1/3 border bg-white rounded-3xl ">
          <h2 className=" font-normal ">ملخص</h2>
        </div>
        <div className=" p-6 w-1/3 bg-white rounded-3xl">the second grid</div>
        <div className=" py-8 px-6 w-1/3 border bg-white text-center rounded-3xl flex-col space-y-12  ">
          <p className="font-bold text-lg ">ادفع عن طريق الدفع الإلكتروني</p>
          <button className=" w-full bg-primary-P200 text-white text-lg p-4 rounded-lg">
            تأكيد الشراء
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
