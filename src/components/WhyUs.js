import Image from "next/image";
import React from "react";
import videoImg from "/public/assets/images/pexels-katya-wolf-8716103 2.png";
import dots1 from "/public/assets/images/Group 59.png";
import dots2 from "/public/assets/images/Group 58.png";
import useTranslation from "next-translate/useTranslation";
import SectionHeader from "./SectionHeader";
import SectionListCard from "./SectionListCard";

const WhyUs = () => {
  const { t } = useTranslation("index");

  return (
    <div className="bg-neutral-N20 px-20 py-10">
      <SectionHeader title={t("home.whyus.title")} />
      <div className="grid grid-cols-2 gap-8 justify-between">
        <section className="flex flex-col gap-3">
          <SectionListCard
            title={"محتوى تدريبي مميز"}
            content={
              "تنفرد التأصيل بمحتوى تدريبي مميز وغني بالمعارف والمهارات، مُعَدٌّ على يد كوكبة من الخبراء المتخصصين في مجالات عديدة، وَفْق أسس ومعايير تدريبية ومنهجية مُعتمَدة."
            }
            number={"01"}
          />
          <SectionListCard
            title={"خبراء متخصصون بمجالات عديدة"}
            content={
              "قامت التأصيل باستقطاب كوكبة من الخبراء البارزين في مجالات التنمية الإدارية لإعداد وتقديم المحتوى التدريبي الإلكتروني."
            }
            number={"02"}
          />
          <SectionListCard
            title={"انطلق بالسرعة التي تناسبك"}
            content={
              "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
            }
            number={"03"}
          />
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
          <div className="self-end leading-[0]">
            <Image src={dots2} alt="dots" className="h-full" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
