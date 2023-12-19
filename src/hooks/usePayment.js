import { useRouter } from "next/router";
import { PAYMEMT_CREATE } from "../graphql/mutations/payment";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export const useCreatePayment = () => {
  const router = useRouter();
  const [createPaymentFn, { data, error, loading }] = useMutation(
    PAYMEMT_CREATE,
    {
      onCompleted: (data) => {
        toast.success(`success`, {
          autoClose: 3000,
          hideProgressBar: false,
        });
        console.log({ data, url: data.payment_create.data.url });
        router.push(`${data.payment_create.data.url}`);
      },
      onError: (error) => {
        toast.error(`error:${error}`, {
          autoClose: 3000,
          hideProgressBar: false,
        });
        console.log({ error });
      },
    }
  );

  return [createPaymentFn, { data, error, loading }];
};
