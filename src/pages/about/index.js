import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import Header from "../../components/Header";
import SectionHeader from "../../components/SectionHeader";
import SectionListCard from "../../components/SectionListCard";

import maskgroup from "/public/assets/images/Mask group.png";
import dudani from "/public/assets/images/vighnesh-dudani.png";
import deepmind2 from "/public/assets/images/deepmind-2.png";
import dots1 from "/public/assets/images/Group 59.png";
import dots2 from "/public/assets/images/Group 58.png";

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
      <section className="px-20 py-14 flex gap-20">
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
        <SectionHeader title={"رسالتنا ،هدفنا ورؤيتنا"} />
        <div className="flex gap-8">
          <div className="flex-1 mt-14">
            <article className="bg-white px-7 mb-12">
              <p className="bg-primary-P300 -translate-y-1/2 -mx-7 rounded-tl-[30px] rounded-md w-fit px-10 flex justify-center items-center text-center font-semibold text-lg py-3 text-white">
                رسالتنا
              </p>
              <p className="text-gray-G30 pb-7">
                المشاركة في تحقيق التنمية الإدارية، وتلبية احتياجات العملاء.
                وعلى إثر انطلاق برامج تحقيق رؤية المملكة 2030، سعى معهد الإدارة
                العامة لتحقيق هذه التنمية، من خلال خلق بيئة إلِكترونية متكاملة
                لعمليتي تدريب وتأهيل رأس المال البشري، دون اعتبار لحاجز المكان
                أو الزمان.
              </p>
            </article>
            <article className="bg-white px-7">
              <p className="bg-primary-P300 -translate-y-1/2 -mx-7 rounded-tl-[30px] rounded-md w-fit px-10 flex justify-center items-center text-center font-semibold text-lg py-3 text-white">
                هدفنا
              </p>
              <p className="text-gray-G30 pb-7">
                رفع كفاءة رأس المال البشري في الوطن العربي، عَبْرَ العديد من
                المنتجات التدريبية الإلِكترونية.
              </p>
            </article>
          </div>
          <div className="flex  flex-1 flex-col">
            <div className="flex gap-1 items-end">
              <div className="bg-primary-P300 rounded-tl-3xl h-[72px] w-28 -mb-3" />
              <Image src={dots1} alt="dots" className="pb-1" />
            </div>
            <div className="basis-full mb-1">
              <iframe
                className="h-full w-full leading-[0] rounded-xl"
                src="https://www.youtube.com/embed/sPxy6kwUCNE"
                title="why us video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
                allowfullscreen
              ></iframe>
            </div>
            <div className="self-end mt-1 leading-[0px]">
              <Image src={dots2} alt="dots" className="h-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-20 py-14">
        <SectionHeader title={"عن برامج ومنتجات جامعة التأصل"} />
        <div className="flex gap-10">
          <div className="flex-1 flex self-center">
            <div className="rounded-lg -translate-x-1/2 translate-y-1/4 z-[3] h-full w-full">
              <Image
                src={dudani}
                alt=""
                className="rounded-lg"
                layout="responsive"
              />
            </div>
            <div className="h-full w-full">
              <Image
                src={deepmind2}
                alt=""
                className="rounded-lg"
                layout="responsive"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 flex-1">
            <div>
              <p className="text-xl font-semibold mb-4">برامج تدريبية</p>
              <p className="text-xl text-gray-G30">
                برامج تدريبية إلكترونية تغطي مجالات عديدة تعزز سُبل تحقيق الأداء
                الوظيفي الأمثل، معتمدين على أحدث أنماط التدريب الرقْمي وَفْقَ
                آليات ومعايير تدريبية وتكنولوجية ذات جودة عالية.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-4">برامج تدريبية</p>
              <p className="text-xl text-gray-G30">
                برامج تدريبية إلكترونية تغطي مجالات عديدة تعزز سُبل تحقيق الأداء
                الوظيفي الأمثل، معتمدين على أحدث أنماط التدريب الرقْمي وَفْقَ
                آليات ومعايير تدريبية وتكنولوجية ذات جودة عالية.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-4">برامج تدريبية</p>
              <p className="text-xl text-gray-G30">
                برامج تدريبية إلكترونية تغطي مجالات عديدة تعزز سُبل تحقيق الأداء
                الوظيفي الأمثل، معتمدين على أحدث أنماط التدريب الرقْمي وَفْقَ
                آليات ومعايير تدريبية وتكنولوجية ذات جودة عالية.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-4">برامج تدريبية</p>
              <p className="text-xl text-gray-G30">
                برامج تدريبية إلكترونية تغطي مجالات عديدة تعزز سُبل تحقيق الأداء
                الوظيفي الأمثل، معتمدين على أحدث أنماط التدريب الرقْمي وَفْقَ
                آليات ومعايير تدريبية وتكنولوجية ذات جودة عالية.
              </p>
            </div>
          </div>
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
            number={"05"}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
