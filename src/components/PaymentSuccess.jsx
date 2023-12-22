import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Icon from "./Icon";
import Link from "next/link";

function PaymentSuccess({ open, setOpen }) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <div class="bg-white p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              class="mx-auto my-6 h-16 w-16 text-green-600"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div class="text-center">
              <h3 class="text-center text-base font-semibold text-gray-900 md:text-2xl">
                تم الشراء!
              </h3>
              <p class="my-2 text-gray-600">
                نشكرك على إكمال عملية الشراء الآمنة عبر الإنترنت
              </p>
              <p> أتمنى لك يوماً عظيماً! </p>
            </div>
          </div>

          <Dialog.Close asChild>
            <Link href="/cart">
              <button
                className="hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px]  inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Icon id={"cancel"} size={25} />
              </button>
            </Link>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default PaymentSuccess;
