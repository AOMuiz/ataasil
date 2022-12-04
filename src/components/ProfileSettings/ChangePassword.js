import CtaButton from "../CtaButton";
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
            <label htmlFor="" className="py-2">
              كلمة المرور الحالية
            </label>
            <input
              type="text"
              placeholder="كلمة المرور الحالية"
              className="rounded border-2 bg-[#F9F9F9] py-4 placeholder:py-1 px-2"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="" className="py-2">
              كلمة المرور الجديدة
            </label>
            <input
              type="text"
              placeholder="كلمة المرور الجديدة"
              className="rounded border-2 bg-[#F9F9F9] py-4 placeholder:py-1 px-2"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="" className="py-2">
              تثبيت كلمة المرور الجديدة
            </label>
            <input
              type="text"
              placeholder="تثبيت كلمة المرور الجديدة"
              className="rounded border-2 bg-[#F9F9F9] py-4 placeholder:py-1 px-2"
            />
          </div>
          <div className="self-end mb-2">
            <CtaButton>إعادة تعيين</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
