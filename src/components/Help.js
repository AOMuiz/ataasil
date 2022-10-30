import React from "react";

const Help = () => {
  return (
    <div className="bg-neutral-N30 px-20 py-10">
      <p className="font-bold text-3xl pb-5">هل لديك اسئلة؟</p>
      <div className="flex justify-between items-center text-lg text-gray-G30">
        <p>ربما تجد الإجابة في الأسئلة الشائعة في صفحة مركز المساعدة</p>
        <button className="bg-primary-P300 p-3 rounded-full text-white">
          مركز المساعدة
        </button>
      </div>
    </div>
  );
};

export default Help;
