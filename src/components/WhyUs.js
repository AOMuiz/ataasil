import Image from "next/image";
import React from "react";
import videoImg from "/public/assets/images/pexels-katya-wolf-8716103 2.png";
import dots1 from "/public/assets/images/Group 59.png";
import dots2 from "/public/assets/images/Group 58.png";
import useTranslation from "next-translate/useTranslation";
import SectionHeader from "./SectionHeader";

const WhyUs = () => {
  const { t } = useTranslation("index");

  return (
    <div className="bg-neutral-N20 px-20 py-10">
      <SectionHeader title={t("home.whyus.title")} />
      <div className="grid grid-cols-2 gap-8 justify-between">
        <section className="flex flex-col gap-3">
          <div className="bg-white relative px-7 py-5">
            <div className="bg-primary-P300 rounded-full absolute -right-1 top-2/4 -translate-y-2/4 translate-x-2/4 text-center h-12 w-12 flex items-center justify-center ">
              <span className="text-2xl text-white">01</span>
            </div>
            <p className="text-lg pb-5 font-normal">محتوى تدريبي مميز </p>
            <p className="text-gray-G30">
              تنفرد التأصيل بمحتوى تدريبي مميز وغني بالمعارف والمهارات، مُعَدٌّ
              على يد كوكبة من الخبراء المتخصصين في مجالات عديدة، وَفْق أسس
              ومعايير تدريبية ومنهجية مُعتمَدة.
            </p>
          </div>
          <div className="bg-white relative px-7 py-5">
            <div className="bg-primary-P300 rounded-full absolute -right-1 top-2/4 -translate-y-2/4 translate-x-2/4 text-center h-12 w-12 flex items-center justify-center ">
              <span className="text-2xl text-white">02</span>
            </div>
            <p className="text-lg pb-5 font-normal">
              خبراء متخصصون بمجالات عديدة
            </p>
            <p className="text-gray-G30">
              قامت التأصيل باستقطاب كوكبة من الخبراء البارزين في مجالات التنمية
              الإدارية لإعداد وتقديم المحتوى التدريبي الإلكتروني.
            </p>
          </div>
          <div className="bg-white relative px-7 py-5">
            <div className="bg-primary-P300 rounded-full absolute -right-1 top-2/4 -translate-y-2/4 translate-x-2/4 text-center h-12 w-12 flex items-center justify-center ">
              <span className="text-2xl text-white">03</span>
            </div>
            <p className="text-lg pb-5 font-normal">
              انطلق بالسرعة التي تناسبك
            </p>
            <p className="text-gray-G30">
              لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة
              وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف
            </p>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="flex gap-1 items-end">
            <div className="bg-primary-P300 rounded-tl-3xl h-[72px] w-28" />
            <Image src={dots1} alt="dots" className="pb-1" />
          </div>
          <div className="basis-full mb-1 rounded-md">
            {/* <Image
              src={videoImg}
              alt="why us video"
              layout="responsive"
              className="h-full "
            /> */}
            <iframe
              className="h-full w-full leading-[0]"
              src="https://www.youtube.com/embed/sPxy6kwUCNE"
              title="why us video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
              allowfullscreen
            ></iframe>
          </div>
          <div className="self-end">
            <Image src={dots2} alt="dots" className="leading-[0] h-full" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
