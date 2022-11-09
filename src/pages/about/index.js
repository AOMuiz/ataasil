import React from "react";
import useTranslation from "next-translate/useTranslation";
import Header from "../../components/Header";
import WhyUs from "../../components/WhyUs";
import SectionHeader from "../../components/SectionHeader";
import Image from "next/image";
import maskgroup from "/public/assets/images/Mask group.png";

const About = () => {
  const { t } = useTranslation("index");
  return (
    <div>
      <Header heading={"نبذة عنا"} />
      <section className="bg-neutral-N20 px-20 py-12 flex gap-20">
        <div className="flex-1 self-center">
          <SectionHeader title={"عن جامعة التأصل"} />
          {/* <p>عن جامعة التأصل</p> */}
          <p className="text-xl text-gray-G30">
            الغرض من الدورة التمهيدية هو بناء أساسك للتوحيد الإسلامي والعقيدة
            الصحيحة لصحابة النبي. الغرض من الدورة التمهيدية هو بناء أساسك
            للتوحيد الإسلامي والعقيدة الصحيحة لصحابة النبي. الغرض من الدورة
            التمهيدية هو بناء أساسك للتوحيد الإسلامي والعقيدة الصحيحة لصحابة
            النبي.
          </p>
        </div>
        <div className="flex-1 h-96 overflow-hidden">
          <iframe
            className="h-full w-full rounded-2xl leading-[0]"
            src="https://www.youtube.com/embed/sPxy6kwUCNE"
            title="why us video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          ></iframe>
        </div>
      </section>
      <section className="px-20 py-16 flex gap-20">
        <Image src={maskgroup} alt="mask group" />
        <div className="flex-1 self-center">
          <SectionHeader title={"من نحن"} />
          <p className="text-xl text-gray-G30 ">
            الغرض من الدورة التمهيدية هو بناء أساسك للتوحيد الإسلامي والعقيدة
            الصحيحة لصحابة النبي. الغرض من الدورة التمهيدية هو بناء أساسك
            للتوحيد الإسلامي والعقيدة الصحيحة لصحابة النبي. الغرض من الدورة
            التمهيدية هو بناء أساسك للتوحيد الإسلامي والعقيدة الصحيحة لصحابة
            النبي.
          </p>
        </div>
      </section>
      <WhyUs />
    </div>
  );
};

export default About;
