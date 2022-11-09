import React from "react";
import useTranslation from "next-translate/useTranslation";
import Header from "../../components/Header";
import WhyUs from "../../components/WhyUs";
import SectionHeader from "../../components/SectionHeader";
import Image from "next/image";
import maskgroup from "/public/assets/images/Mask group.png";
import SectionListCard from "../../components/SectionListCard";

const About = () => {
  const { t } = useTranslation("index");
  return (
    <div>
      <Header heading={"نبذة عنا"} />
      <section className="bg-neutral-N20 px-20 py-14 flex gap-20">
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
        <div className="flex-1">
          <Image src={maskgroup} alt="mask group" layout="responsive" />
        </div>

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
      <section className="bg-neutral-N20 px-20 py-14">
        <SectionHeader title={"خطوات شراء البرامج التدريبية"} />
        <div className="grid grid-cols-2 gap-10">
          <SectionListCard
            title={"اختر البرنامج التدريبي"}
            content={
              '"بعد إضافتك للبرامج، اضغط على أيقونة "سلة التسوق" في أعلى الصفحة، ثم اضغط على خيار "التفاصيل". وبعد أن تتأكد من كل التفاصيل، أدخل كود التخفيض (إن وُجد) في الخانة الخاصة به. ثم اضغط على خيار "ذهاب إلى الدفع"، لتختار الطريقة المناسبة لك؛ إما الدفع الإلكتروني، أو عن طريق سداد.`'
            }
            number={"01"}
          />
          <SectionListCard
            title={"الدفع الإلكتروني"}
            content={
              "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
            }
            number={"02"}
          />
          <SectionListCard
            title={"معالجة الطلب"}
            content={
              "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
            }
            number={"03"}
          />
          <SectionListCard
            title={"سلة التسوق"}
            content={
              "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
            }
            number={"04"}
          />
          <SectionListCard
            title={"انطلق بالسرعة التي تناسبك"}
            content={
              "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
            }
            number={"03"}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
