import Image from "next/image";
import SectionHeader from "../SectionHeader";
import dots1 from "/public/assets/images/Group 59.png";
import dots2 from "/public/assets/images/Group 58.png";

const OurMessage = () => {
  return (
    <section className="bg-neutral-N20 px-20 py-14">
      <SectionHeader title={"رسالتنا ،هدفنا ورؤيتنا"} />
      <div className="flex gap-8">
        <div className="flex-1 mt-14">
          <article className="bg-white px-7 mb-12">
            <p className="bg-primary-P300 -translate-y-1/2 -mx-7 rounded-tl-[30px] rounded-md w-fit px-10 flex justify-center items-center text-center font-semibold text-lg py-3 text-white">
              رسالتنا
            </p>
            <p className="text-gray-G30 pb-7">
              المشاركة في تحقيق التنمية الإدارية، وتلبية احتياجات العملاء. وعلى
              إثر انطلاق برامج تحقيق رؤية المملكة 2030، سعى معهد الإدارة العامة
              لتحقيق هذه التنمية، من خلال خلق بيئة إلِكترونية متكاملة لعمليتي
              تدريب وتأهيل رأس المال البشري، دون اعتبار لحاجز المكان أو الزمان.
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
  );
};

export default OurMessage;
