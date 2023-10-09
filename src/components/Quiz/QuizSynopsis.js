import React from "react";
import CtaButton from "../CtaButton";

const QuizSynopsis = ({ totalQuestions, passScore, onStartQuiz }) => {
  return (
    <div className="px-6 py-4">
      <div className="mb-16">
        <p className="mb-6 font-bold text-gray-G30">اختبار</p>
        <h2 className="text-3xl font-bold">
          التدريب الأول: ماهية مقدمة عن البرنامج
        </h2>
      </div>
      <div className="mb-6 flex items-end justify-between border-b-2 border-gray-300 pb-10">
        <div className="space-y-2">
          <h4 className="mb-3 font-bold">أرسل مهمتك</h4>
          <p className="text-gray-G30">
            <span className="font-bold">الوقت:</span> 10 ساعات و 30 دقيقة
          </p>
          <p className="text-gray-G30">
            <span className="font-bold">عدد الأسئلة:</span> {totalQuestions}
          </p>
        </div>
        <CtaButton onClick={onStartQuiz} className="bg-[#039BE5]">
          ابدأ الاختبار
        </CtaButton>
      </div>
      <div className="flex items-end justify-between border-b-2 border-gray-300 pb-6">
        <div className="space-y-2">
          <h4 className="mb-3 font-bold">الحصول على الدرجة</h4>

          <p className="text-gray-G30">
            <span className="font-bold">النجاح:</span> {passScore}% فما فوق
          </p>
        </div>
        <div className="border-r border-gray-200 pl-8 pr-4">
          <p className="font-bold">درجتك</p>
          <p className="fonnt-bold"> - </p>
        </div>
      </div>
    </div>
  );
};

export default QuizSynopsis;
