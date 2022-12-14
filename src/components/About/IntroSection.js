import React from "react";
import SectionHeader from "../SectionHeader";

const IntroSection = () => {
  return (
    <section className="bg-neutral-N20 px-20 py-14 flex gap-20">
      <div className="flex-1 self-center">
        <SectionHeader title={"عن جامعة التأصل"} />
        {/* <p>عن جامعة التأصل</p> */}
        <p className="text-xl text-gray-G30">
          الغرض من الدورة التمهيدية هو بناء أساسك للتوحيد الإسلامي والعقيدة
          الصحيحة لصحابة النبي. الغرض من الدورة التمهيدية هو بناء أساسك للتوحيد
          الإسلامي والعقيدة الصحيحة لصحابة النبي. الغرض من الدورة التمهيدية هو
          بناء أساسك للتوحيد الإسلامي والعقيدة الصحيحة لصحابة النبي.
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
  );
};

export default IntroSection;
