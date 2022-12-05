import Image from "next/image";
import tw, { styled } from "twin.macro";
import CtaButton from "../CtaButton";
import Icon from "../Icon";
import SectionDivider from "../SectionDivider";
import testimonialImg from "/public/assets/images/content-img.png";

const UserProfile = () => {
  return (
    <div>
      <p className="text-2xl font-bold my-7">الملف الشخصي</p>
      <SectionDivider />
      <div className="grid grid-flow-col my-6 gap-6">
        <div className="h-80 bg-neutral-N20 rounded-md p-8 flex flex-col gap-8 items-center justify-center">
          <div className="border-spacing-5 border-white border-[6px] bg-primary-P300 rounded-full h-28 w-28 flex items-center justify-center">
            <Image
              src={testimonialImg}
              alt="testimonial image"
              objectFit="contain"
              className=""
            />
          </div>
          <button className="flex items-center gap-3 rounded-full w-auto text-center text-white px-6 py-3 border-white border-4 bg-primary-P300 cursor-pointer">
            <span>رفع صورة جديدة</span>
            <Icon id={"upload"} size={25} />
          </button>
        </div>
        <InfoContainer className="h-80 overflow-y-scroll">
          <div className="mx-4 flex flex-col gap-5">
            <ChangeProfileInput value={"الاسم الكامل"} label={"الاسم الكامل"} />
            <ChangeProfileInput
              value={"الاسم الكامل بالانجليزية"}
              label={"الاسم الكامل بالانجليزية"}
            />
            <ChangeProfileInput
              value={"البريد الإلكتروني"}
              label={"البريد الإلكتروني"}
            />
            <div>
              <label
                htmlFor=""
                className="inline-block mb-3 text-sm text-gray-G3 font-bold"
              >
                قطاع الوظيفة
              </label>
              <div className="flex items-center rounded border-2 bg-[#F9F9F9] gap-2 p-2">
                <select className="flex-1 text-neutral-N70 px-2 py-1 bg-[#F9F9F9] outline-none">
                  <option value="قطاع الوظيفة">قطاع الوظيفة</option>
                </select>
              </div>
            </div>
          </div>
        </InfoContainer>
        <div className="grid grid-cols-2 gap-x-2">
          <div className="flex flex-col">
            <label htmlFor="" className="py-2">
              الجوال
            </label>
            <input
              type="text"
              id=""
              required
              placeholder="رقم الجوال"
              className="rounded border-2 bg-[#F9F9F9] py-3 placeholder:py-1 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="py-2">
              الكود
            </label>
            <input
              type="text"
              id=""
              required
              placeholder="00234"
              className="rounded border-2 bg-[#F9F9F9] py-3 placeholder:py-1 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="py-2">
              تاريخ الميلاد
            </label>
            <input
              type="date"
              id=""
              placeholder="00234"
              className="rounded border-2 bg-[#F9F9F9] py-3 placeholder:py-1 px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ChangeProfileInput = ({ label, value }) => (
  <div>
    <label
      htmlFor=""
      className="inline-block mb-3 font-bold text-sm text-gray-G30"
    >
      {label}
    </label>
    <div className="flex items-center rounded border-2 bg-[#F9F9F9] ">
      <input
        type="text"
        className="placeholder:py-1 text-neutral-N70 px-2 py-1 bg-[#F9F9F9] outline-none"
        value={value}
      />
      <span className="bg-[#F9F9F9] h-full p-2 border-r-2 ltr:border-l-2 ltr:border-r-0">
        <Icon id={"pencil"} size={20} />
      </span>
    </div>
  </div>
);

export default UserProfile;

const InfoContainer = styled.div`
  scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    width: 6px;
    background: #f9f9f9;
    border-radius: 10px;
    padding-inline-start: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(49, 192, 204, 1);
    border-radius: 5px;
  }
`;
