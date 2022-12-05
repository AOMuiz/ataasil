import Image from "next/image";
import tw, { styled } from "twin.macro";

import irfan from "/public/assets/images/irfan-rahat.png";
import michaela from "/public/assets/images/pexels-michaela.png";
import captcha from "/public/assets/images/captcha.png";

import Header from "../../components/Header";
import Icon from "../../components/Icon";
import SectionHeader from "../../components/SectionHeader";
import CtaButton from "../../components/CtaButton";
import FormInput from "../../components/FormInput";

const ContactUs = () => {
  return (
    <div>
      <Header heading={"تواصل معنا"} />
      <section className="px-20 pt-14 pb-5 grid grid-flow-col gap-20">
        <div>
          <p className="text-3xl pb-8">عنوان</p>
          <SectionHeader title={"جدة"} />
          <p className="text-xl my-11">
            لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول الألم نشأت
            بالفعل، استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل
            لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو
            يتجنب الشعور بالسعادة، التفاصيل لتكتشف حقيقة وأساس تلك السعادة
            البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة،
          </p>
          <div className="flex gap-2">
            <Icon id={"location"} className="text-3xl text-[#016FD0]" />
            <p className="text-xl">
              <span>الرياض – الملز – شارع معهد الإدارة</span>
              <br />
              <span>ص.ب. 205 الرياض 11141 </span>
            </p>
          </div>
        </div>
        <div className="h-fit">
          <div>
            <Image src={irfan} alt="" className="rounded-lg" />
            <div className="-translate-y-2/4 flex justify-center">
              <Image src={michaela} alt="" className="rounded-lg block" />
            </div>
          </div>
        </div>
      </section>
      <ContactForm>
        <p className="text-center my-8 text-3xl">تواصل معنا</p>
        <div className="flex gap-4 mb-2">
          <div className="flex-1 flex flex-col">
            <FormInput placeholder="الاسم الكامل" label="الاسم الكامل" />
          </div>
          <div className="flex-1 flex flex-col">
            <FormInput
              label="البريد الإلكتروني"
              placeholder="البريد الإلكتروني"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="basis-2/4 flex flex-col">
            <FormInput label="الموضوع" placeholder="الموضوع" />
          </div>
          <div className="basis-1/4 flex flex-col">
            <FormInput label="الجوال" placeholder="رقم الجوال" />
          </div>
          <div className="basis-auto flex flex-col ">
            <FormInput label="الكود" htmlFor="" placeholder="00234" />
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="flex-1 flex flex-col">
            <label htmlFor="" className="py-2">
              حدد نوع المشكلة التي تواجهك
            </label>
            <select
              name="حدد نوع المشكلة التي تواجهك"
              id=""
              className="rounded border-2 bg-[#F9F9F9] py-3 px-2 text-gray-G30"
            >
              <option value="حدد نوع المشكلة التي تواجهك">
                حدد نوع المشكلة التي تواجهك
              </option>
              <option value="حدد نوع المشكلة التي تواجهك">
                حدد نوع المشكلة التي تواجهك
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="flex-1 flex flex-col">
            <FormInput
              label="رقم الإقامة / رقم الهوية"
              placeholder="رقم الإقامة / رقم الهوية"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="flex-1 flex flex-col">
            <label htmlFor="" className="py-2">
              الرسائل
            </label>
            <textarea
              placeholder="الرسائل"
              className="rounded border-2 bg-[#F9F9F9] py-3 placeholder:py-1 px-2 h-40"
            />
          </div>
        </div>
        <div className="flex justify-center items-center my-8">
          <Image src={captcha} alt="recapcha" />
        </div>
        <div className="flex justify-center items-center">
          <CtaButton disabled>أرسل النموذج</CtaButton>
        </div>
      </ContactForm>
    </div>
  );
};

export default ContactUs;

const ContactForm = styled.section`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-inline: auto;
  margin-bottom: 3.5rem;
  padding: 1.75rem;
  width: 80%;
  /* 'w-4/5 p-7 mb-14' */
`;
