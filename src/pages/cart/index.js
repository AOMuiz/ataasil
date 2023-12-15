import React, { useEffect } from "react";
import Image from "next/image";
import Icon from "../../components/Icon";
import CtaButton from "../../components/CtaButton";
import { useGetCart, useRemoveFromCart } from "../../hooks/useCart";
import { cartItemsVar } from "../../graphql/state";
import { useReactiveVar } from "@apollo/client";
const Index = () => {
  const courseFromCartVar = useReactiveVar(cartItemsVar);
  const [cartData, error, loading] = useGetCart();
  const [removeFromCartFn, removeData, removeError, removeLoading] =
    useRemoveFromCart();

  return (
    <div className="mx-12">
      <div className="mx-32 my-16 flex gap-x-2 font-bold">
        <h1 className="text-2xl">
          سلة التسوىق({`${cartData?.courses_getFromCart.length}`})
        </h1>
        <button
          onClick={() => removeFromCartFn([])}
          className="flex items-center gap-2 rounded-md bg-danger-D10 p-1 text-white"
        >
          <Icon id={"delete"} />
          حذف الكل
        </button>
      </div>
      <div className="mx-auto  flex  justify-center gap-4 rounded-3xl bg-neutral-N20 p-5">
        <div className="flex-1 rounded-3xl border bg-white p-6 ">
          <div className=" mx-4 grid gap-4">
            {courseFromCartVar?.map((course) => (
              <div
                className="flex gap-4 border-b-2 border-[#E7E7E7] pb-2"
                key={course?._id}
              >
                <div className="relative aspect-video">
                  <Image
                    src={course?.banner}
                    layout="fill"
                    alt="course banner"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-light">{course?.title}</p>
                    <p className="text-md font-bold">{course?.price} ر.س</p>
                  </div>
                  <p className="mb-4 text-gray-500">
                    {course?.teacher.username}
                  </p>
                  <button
                    onClick={() =>
                      removeFromCartFn({
                        variables: { courseIds: [course?._id] },
                        refetchQueries: [
                          "Courses_getFromCart", // Query name
                        ],
                      })
                    }
                    className="flex w-fit items-center gap-2 font-bold text-primary-P600"
                  >
                    <Icon id="delete" />
                    <span>حذف</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 flex-col space-y-12 rounded-3xl border bg-white px-6 py-8">
          <p className="text-lg font-bold">ملخص</p>
          <div className="space-y-5">
            <p className="flex items-center justify-between gap-5">
              <span className="font-light">المجموع للمنتجات</span>
              <span>94.35 ر.س</span>
            </p>
            <p className="flex items-center justify-between gap-5">
              <span className="font-light">قيمة الخصم (ان وجد)</span>
              <span>94.35 ر.س</span>
            </p>
            <p className="flex items-center justify-between gap-5">
              <span>المجموع النهائي</span>
              <span className="font-bold">100 ر.س</span>
            </p>
          </div>
          <CtaButton className=" w-full rounded-lg bg-primary-P200 p-4 text-lg text-white">
            تأكيد الشراء
          </CtaButton>
        </div>
      </div>
    </div>
  );
};

export default Index;
