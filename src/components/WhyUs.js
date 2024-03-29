import Image from "next/image";
import videoImg from "/public/assets/images/pexels-katya-wolf-8716103 2.png";
import dots1 from "/public/assets/images/Group 59.png";
import dots2 from "/public/assets/images/Group 58.png";
import useTranslation from "next-translate/useTranslation";
import SectionHeader from "./SectionHeader";
import SectionListCard from "./SectionListCard";
import ReactPlayer from "react-player/youtube";

const WhyUs = () => {
  const { t } = useTranslation("index");

  return (
    <div className="bg-neutral-N20 px-20 py-10 2md:px-10 md:px-8">
      <SectionHeader title={t("home.whyus.title")} />
      <div className="grid grid-cols-2 justify-between gap-8 md:grid-cols-1">
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
        <section className="flex flex-col md:min-h-[350px]">
          <div className="flex items-end gap-1">
            <div className="h-[72px] w-28 rounded-tl-3xl bg-primary-P300" />
            <Image src={dots1} alt="dots" className="pb-1" />
          </div>
          <div className="mb-1 basis-full rounded-md">
            <div className="h-full w-full leading-[0]">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=sPxy6kwUCNE"
                title="why us video player"
                width={"100%"}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            </div>
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
