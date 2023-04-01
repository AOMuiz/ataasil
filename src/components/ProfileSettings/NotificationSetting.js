import CtaButton from "../CtaButton";
import SectionDivider from "../SectionDivider";
import ToggleSwitch from "../ToggleSwitch";
import SubHeading from "./SubHeading";

const NotificationSetting = () => {
  return (
    <section>
      <SubHeading content={"الإشعارات"} />
      <SectionDivider />
      <div className="mx-2 my-4">
        <div className="flex flex-col gap-8 py-5">
          <ToggleSwitch
            content={"تعطيل تنبيهات البريد الإلكتروني"}
            iconId={"bell"}
          />
          <ToggleSwitch
            content={"تعطيل تنبيهات البريد الإلكتروني"}
            iconId={"certificate"}
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <CtaButton>إنشاء حساب</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default NotificationSetting;
