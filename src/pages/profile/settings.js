import CtaButton from "../../components/CtaButton";
import SectionDivider from "../../components/SectionDivider";
import SectionHeader from "../../components/SectionHeader";
import ProfileLayout from "../../layout/profileLayout";

const User = () => {
  return (
    <section className="py-12">
      <div className="my-10">
        <SectionHeader title={"إعدادت الحساب"} />
        <p className="text-2xl font-bold my-7">الملف الشخصي</p>
      </div>
      <SectionDivider />
      <div></div>
      <div>
        <p className="text-2xl font-bold my-7">الاهتمامات</p>
        <SectionDivider />
      </div>
      <div>
        <p className="text-2xl font-bold my-7">الإشعارات</p>

        <SectionDivider />
      </div>
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
    </section>
  );
};

User.PageLayout = ProfileLayout;

export default User;
