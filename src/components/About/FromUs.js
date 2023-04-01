import Image from "next/image";
import SectionHeader from "../SectionHeader";
import maskgroup from "/public/assets/images/Mask group.png";

const FromUs = () => {
  return (
    <section className="px-20 py-14 flex gap-20">
      <div className="flex-1">
        <Image src={maskgroup} alt="mask group" layout="responsive" />
      </div>

      <div className="flex-1 self-center">
        <SectionHeader title={"من نحن"} />
        <p className="text-xl text-gray-G30 ">
          الغرض من الدورة التمهيدية هو بناء أساسك للتوحيد الإسلامي والعقيدة
          الصحيحة لصحابة النبي. الغرض من الدورة التمهيدية هو بناء أساسك للتوحيد
          الإسلامي والعقيدة الصحيحة لصحابة النبي. الغرض من الدورة التمهيدية هو
          بناء أساسك للتوحيد الإسلامي والعقيدة الصحيحة لصحابة النبي.
        </p>
      </div>
    </section>
  );
};

export default FromUs;
