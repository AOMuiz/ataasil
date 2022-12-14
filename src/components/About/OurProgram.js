import React from "react";
import Image from "next/image";
import SectionHeader from "../../components/SectionHeader";

import dudani from "/public/assets/images/vighnesh-dudani.png";
import deepmind2 from "/public/assets/images/deepmind-2.png";

const OurProgram = () => {
  return (
    <section className="px-20 py-14">
      <SectionHeader title={"عن برامج ومنتجات جامعة التأصل"} />
      <div className="flex gap-10">
        <div className="flex-1 flex self-center">
          <div className="rounded-lg -translate-x-1/2 translate-y-1/4 ltr:translate-x-1/2 ltr:translate-y-1/4  z-[3] h-full w-full">
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
  );
};

export default OurProgram;
