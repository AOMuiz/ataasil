import CtaButton from "../CtaButton";
import SectionDivider from "../SectionDivider";

const ChangePassword = () => {
  return (
    <div>
      <p className="text-2xl font-bold my-7">تغيير كلمة المرور</p>
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
    </div>
  );
};

export default ChangePassword;
