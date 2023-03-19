import SectionHeader from "../../components/SectionHeader";
import SectionListCard from "../../components/SectionListCard";

const ProgramListStep = () => {
  return (
    <section className="bg-neutral-N20 px-20 py-14">
      <SectionHeader title={"خطوات شراء البرامج التدريبية"} />
      <div className="grid grid-cols-2 gap-10">
        <SectionListCard
          title={"اختر البرنامج التدريبي"}
          content={
            '"بعد إضافتك للبرامج، اضغط على أيقونة "سلة التسوق" في أعلى الصفحة، ثم اضغط على خيار "التفاصيل". وبعد أن تتأكد من كل التفاصيل، أدخل كود التخفيض (إن وُجد) في الخانة الخاصة به. ثم اضغط على خيار "ذهاب إلى الدفع"، لتختار الطريقة المناسبة لك؛ إما الدفع الإلكتروني، أو عن طريق سداد.`'
          }
          number={"01"}
        />
        <SectionListCard
          title={"الدفع الإلكتروني"}
          content={
            "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
          }
          number={"02"}
        />
        <SectionListCard
          title={"معالجة الطلب"}
          content={
            "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
          }
          number={"03"}
        />
        <SectionListCard
          title={"سلة التسوق"}
          content={
            "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
          }
          number={"04"}
        />
        <SectionListCard
          title={"انطلق بالسرعة التي تناسبك"}
          content={
            "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف."
          }
          number={"05"}
        />
      </div>
    </section>
  );
};

export default ProgramListStep;
