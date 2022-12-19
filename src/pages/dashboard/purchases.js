import ProfileLayout from "../../layout/profileLayout";
import { Container } from ".";
import SectionHeader from "../../components/SectionHeader";
import Icon from "../../components/Icon";
import UnstyledButton from "../../components/UnstyledButton";
import Image from "next/image";
import interPayment from "/public/assets/images/international-payment.png";
import tw, { styled } from "twin.macro";

const Purchases = () => {
  return (
    <Container>
      <div className="my-10">
        <SectionHeader title={"المشتريات السابقة"} />
        <div className="flex justify-between items-center w-11/12">
          <p className="text-2xl my-10">1 من عمليات الشراء</p>
          <div className=" flex justify-between items-center gap-4">
            <UnstyledButton>
              <Icon
                id={"options"}
                size={24}
                className="bg-gray-G20 p-2 rounded-full"
                color="#5A5A5A"
              />
            </UnstyledButton>
            <UnstyledButton>
              <Icon
                id={"sort"}
                size={24}
                className="bg-gray-G20 p-2 rounded-full"
                color="#5A5A5A"
              />
            </UnstyledButton>
          </div>
        </div>
      </div>
      <div className="bg-gray-G20 rounded-xl shadow px-6 w-11/12">
        <div className="flex justify-between">
          <p className="font-bold text-lg py-5">رقم عملية الشراء : 1</p>
          <UnstyledButton>
            <Icon id={"chevron-up"} size={24} />
          </UnstyledButton>
        </div>
        <div className="flex gap-8">
          <table>
            <tr>
              <TableHeading>رقم الطلب</TableHeading>
              <TableHeading>المبلغ</TableHeading>
              <TableHeading>حالة العملية</TableHeading>
              <TableHeading>تاريخ الشراء</TableHeading>
              <TableHeading>وسيلة الدفع</TableHeading>
            </tr>
            <tr>
              <td className="px-3">700202226000722968</td>
              <td className="px-3">100</td>
              <td className="px-3">يتم السداد</td>
              <td className="px-3">17/09/2022 08:57 AM</td>
              <td className="px-3">
                <Image src={interPayment} alt="payment methods" />
              </td>
            </tr>
          </table>
          <div className="self-center">
            <UnstyledButton>
              <Icon id={"eyeOpen"} size={24} color="#5A5A5A" />
            </UnstyledButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

Purchases.PageLayout = ProfileLayout;

export default Purchases;

const TableHeading = styled.th(({}) => [
  tw`text-base text-gray-G30 font-normal p-3 text-right`,
  `text-aling:start`,
]);
