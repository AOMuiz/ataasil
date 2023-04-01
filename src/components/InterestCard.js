import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Icon from "./Icon";
import interest_image from "/public/assets/images/interest_img.png";
import SectionHeader from "./SectionHeader";

const InterestCard = () => {
  const { t } = useTranslation("index");
  return (
    <div className="flex items-center justify-between gap-20 px-20 py-10 md:flex-wrap">
      <div className="w-fit max-w-[600px]">
        <SectionHeader title={t("home.interestcard.header")} />
        <p className="py-16">{t("home.interestcard.contents")}</p>
        <div className="flex w-28 cursor-pointer items-center justify-center gap-4 rounded-3xl bg-primary-P600 p-4 text-white ">
          <p>{t("home.interestcard.begin")}</p>
          <Icon id={"left"} />
        </div>
      </div>
      <Image src={interest_image} alt="interest image" />
    </div>
  );
};

export default InterestCard;
