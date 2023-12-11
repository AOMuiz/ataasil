import React from "react";
import Icon from "../Icon";
import Image from "next/image";
import ownerIcon from "/public/assets/images/owner.png";
import cardImage from "/public/assets/images/card-img.png";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { BsFillPlayCircleFill } from "react-icons/bs";

const CourseCard = ({
  id,
  title,
  description,
  banner,
  category,
  teacher,
  price,
}) => {
  const { t } = useTranslation("index");

  return (
    <>
      <article className="group min-w-[270px] flex-1 rounded-[30px] bg-white shadow-md transition-all hover:-translate-y-2">
        <Link href={`/course/${id}/${title}`}>
          <div className=" relative w-full cursor-pointer overflow-hidden rounded-t-[30px] leading-none">
            <div className="relative aspect-square min-h-[200px]">
              <Image
                src={banner ? banner : cardImage}
                alt="banner"
                layout="fill"
              />
            </div>
            <div className="hidden h-fit items-center justify-center bg-primary-P300 opacity-50 group-hover:absolute group-hover:inset-0 group-hover:flex group-hover:h-full ">
              <BsFillPlayCircleFill size={80} color="" />
            </div>
          </div>
        </Link>
        <div className="p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Icon id={"book"} className="cursor-pointer" size="20" />
              <p>{category && category}</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon id={"clock"} size="20" />
              <p>{t("coursecards.date")}</p>
            </div>
          </div>

          <p className=" py-3 text-lg font-bold">{title && title}</p>
          <p>{description && description}</p>
          <div className="flex items-center justify-between py-3">
            <div className="flex  items-center gap-2 ">
              <Image src={ownerIcon} alt="" />
              <p>{teacher && teacher}</p>
            </div>
            <p className="cursor-pointer text-primary-P300">
              {price && `$ ${price}`}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default CourseCard;
