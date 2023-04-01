import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import paginationImg from "/public/assets/images/content-img.png";
import Icon from "../Icon";
import useTranslation from "next-translate/useTranslation";
import SectionHeader from "../SectionHeader";

const Testimonials = () => {
  const { t } = useTranslation("index");

  return (
    <div className="py-10 px-20">
      <SectionHeader title={t("home.testimonials.title")} />
      <div className="flex gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className="flex gap-3 mt-10 justify-center items-center">
        <Icon
          id={"greater-than"}
          color={"#A6A6A6"}
          className="cursor-pointer"
        />
        <div className="flex bg-primary-P300 rounded-full p-3 text-center">
          <Image
            src={paginationImg}
            alt="pagination image"
            objectFit="contain"
            height={20}
            width={20}
          />
        </div>
        <div className="flex bg-primary-P300 rounded-full p-3 text-center">
          <Image
            src={paginationImg}
            alt="pagination image"
            objectFit="contain"
            height={20}
            width={20}
          />
        </div>
        <div className="flex bg-primary-P300 rounded-full p-3 text-center">
          <Image
            src={paginationImg}
            alt="pagination image"
            objectFit="contain"
            height={20}
            width={20}
          />
        </div>
        <div className="flex bg-primary-P300 rounded-full p-3 text-center">
          <Image
            src={paginationImg}
            alt="pagination image"
            objectFit="contain"
            height={20}
            width={20}
          />
        </div>
        <Icon id={"less-than"} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Testimonials;
