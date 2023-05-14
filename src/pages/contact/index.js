import Image from "next/image";
import tw, { styled } from "twin.macro";

import Header from "../../components/Header";
import Icon from "../../components/Icon";
import SectionHeader from "../../components/SectionHeader";
import CtaButton from "../../components/CtaButton";
import FormInput from "../../components/FormInput";

import irfan from "/public/assets/images/irfan-rahat.png";
import michaela from "/public/assets/images/pexels-michaela.png";
import captcha from "/public/assets/images/captcha.png";
import { QUERIES } from "../../utils/constants";

const ContactUs = () => {
  return (
    <div>
      <Header heading={"تواصل معنا"} />
      <section className="grid grid-flow-col gap-20 px-20 pt-14 pb-5 md:grid-flow-row md:px-10">
        <div>
          <p className="pb-8 text-3xl">عنوان</p>
          <SectionHeader title={"جدة"} />
          <p className="my-11 text-xl">
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
            <div className="mx-2 flex -translate-y-2/4 justify-center sm:-translate-y-1/4">
              <Image src={michaela} alt="" className="block rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <ContactForm>
        <p className="my-8 text-center text-3xl">تواصل معنا</p>
        <div className="mb-2 flex gap-4 md:flex-wrap">
          <div className="flex flex-1 flex-col">
            <FormInput placeholder="الاسم الكامل" label="الاسم الكامل" />
          </div>
          <div className="flex flex-1 flex-col">
            <FormInput
              label="البريد الإلكتروني"
              placeholder="البريد الإلكتروني"
            />
          </div>
        </div>
        <div className="mb-2 flex gap-4 2md:flex-wrap">
          <div className="flex basis-2/4 flex-col md:basis-full">
            <FormInput label="الموضوع" placeholder="الموضوع" />
          </div>
          <div className="flex basis-1/4 flex-col md:basis-full">
            <FormInput label="الجوال" placeholder="رقم الجوال" />
          </div>
          <div className="flex basis-auto flex-col md:basis-full">
            <FormInput label="الكود" htmlFor="" placeholder="00234" />
          </div>
        </div>
        <div className="mb-2 flex gap-4">
          <div className="flex flex-1 flex-col">
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
        <div className="mb-2 flex gap-4">
          <div className="flex flex-1 flex-col">
            <FormInput
              label="رقم الإقامة / رقم الهوية"
              placeholder="رقم الإقامة / رقم الهوية"
            />
          </div>
        </div>
        <div className="mb-2 flex gap-4">
          <div className="flex flex-1 flex-col">
            <label htmlFor="" className="py-2">
              الرسائل
            </label>
            <textarea
              placeholder="الرسائل"
              className="h-40 rounded border-2 bg-[#F9F9F9] py-3 px-2 placeholder:py-1"
            />
          </div>
        </div>
        <div className="my-8 flex items-center justify-center">
          <Image src={captcha} alt="recapcha" />
        </div>
        <div className="flex items-center justify-center">
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

  @media ${QUERIES.md} {
    width: revert;
    margin-inline: 1rem;
  }
  /* 'w-4/5 p-7 mb-14' */
`;
