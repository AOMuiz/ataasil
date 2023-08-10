import Image from "next/image";
import testimonialImg from "/public/assets/images/content-img.png";
import Icon from "../Icon";

const TestimonialCard = () => {
  return (
    <div className="min-w-[250px] rounded-3xl bg-gray-G10 p-6">
      <p className="pb-8">
        لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة
        وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف{" "}
      </p>
      <div className="mb-7 border"></div>
      <div className="p flex gap-3">
        <div className="flex w-fit rounded-lg bg-amber-200 p-4 text-center">
          <Image
            src={testimonialImg}
            alt="testimonial image"
            objectFit="contain"
          />
        </div>
        <div>
          <div className="mb-2 flex gap-1">
            <Icon id={"starMulti"} className="text-amber-500" />
            <Icon id={"starMulti"} className="text-amber-500" />
            <Icon id={"starMulti"} className="text-amber-500" />
            <Icon id={"starMulti"} className="text-amber-500" />
          </div>
          <p className="font-bold text-black">
            ياسر عبدالله بن عبيدالله اللحياني
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
