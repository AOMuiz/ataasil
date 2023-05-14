import useTranslation from "next-translate/useTranslation";
import SectionHeader from "./SectionHeader";

const Help = () => {
  const { t } = useTranslation("index");

  return (
    <div className="bg-neutral-N30 px-20 py-10 2md:px-10 md:px-8">
      <SectionHeader title={t("home.help.need help")} />
      <div className="flex items-center justify-between text-lg text-gray-G30 md:flex-wrap md:justify-center md:gap-4 md:text-center">
        <p>{t("home.help.summary")}</p>
        <button className="rounded-full bg-primary-P300 py-3 px-5 text-white">
          {t("home.help.action")}
        </button>
      </div>
    </div>
  );
};

export default Help;
