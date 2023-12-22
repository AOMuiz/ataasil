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
        <div className="my-6 flex gap-4 lg:flex-wrap">
          <div className="flex flex-1 flex-col">
            <FormInput
              label="كلمة المرور الحالية"
              placeholder="كلمة المرور الحالية"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <FormInput
              label="كلمة المرور الجديدة"
              placeholder="كلمة المرور الجديدة"
            />
          </div>
          <div className="flex flex-1 flex-col">
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
          <div className="mb-1 self-end">
            <CtaButton>إعادة تعيين</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
