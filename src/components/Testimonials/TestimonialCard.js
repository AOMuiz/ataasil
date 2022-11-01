import Image from "next/image";
import testimonialImg from "/public/assets/images/content-img.png";
import Icon from "../Icon";

const TestimonialCard = () => {
  return (
    <div className="bg-gray-G10 rounded-3xl p-6">
      <p className="pb-8">
        لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة
        وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف{" "}
      </p>
      <div className="border mb-7"></div>
      <div className="flex gap-3 p">
        <div className="flex bg-amber-200 rounded-lg w-fit p-4 text-center">
          <Image
            src={testimonialImg}
            alt="testimonial image"
            objectFit="contain"
          />
        </div>
        <div>
          <div className="flex gap-1 mb-2">
            <Icon id={"star"} className="text-amber-500" />
            <Icon id={"star"} className="text-amber-500" />
            <Icon id={"star"} className="text-amber-500" />
            <Icon id={"star"} className="text-amber-500" />
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
