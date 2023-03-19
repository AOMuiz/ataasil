import CtaButton from "../CtaButton";
import FormInput from "../FormInput";
import SectionDivider from "../SectionDivider";
import SubHeading from "./SubHeading";

const ChangePassword = () => {
  return (
    <section>
      <SubHeading content={"تغيير كلمة المرور"} />
      <SectionDivider />
      <div>
        <div className="flex gap-4 my-6">
          <div className="flex-1 flex flex-col">
            <FormInput
              label="كلمة المرور الحالية"
              placeholder="كلمة المرور الحالية"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <FormInput
              label="كلمة المرور الجديدة"
              placeholder="كلمة المرور الجديدة"
            />
          </div>
          <div className="flex-1 flex flex-col">
            {/* <input
              type="text"
              placeholder=""
              className="rounded border-2 bg-[#F9F9F9] py-4 placeholder:py-1 px-2"
            /> */}
            <FormInput
              label="تثبيت كلمة المرور الجديدة"
              placeholder="تثبيت كلمة المرور الجديدة"
            />
          </div>
          <div className="self-end mb-1">
            <CtaButton>إعادة تعيين</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
