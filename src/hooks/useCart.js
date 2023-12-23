import { COURSES_GET_CART } from "../graphql/queries/courses";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../graphql/mutations/courses";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { cartItemsVar } from "../graphql/state";
import { toast } from "react-toastify";

export const useGetCart = () => {
  const {
    data: cartData,
    error,
    loading,
  } = useQuery(COURSES_GET_CART, {
    onCompleted: (data) => {
      cartItemsVar(data.courses_getFromCart);
    },
    onError: (error) => {
      console.log({ error, pagination });
    },
  });

  return [cartData, error, loading];
};

export const useAddToCart = () => {
  const [addToCartFn, { data, loading, error }] = useMutation(ADD_TO_CART, {
    onCompleted: (data) => {
      cartItemsVar(data?.courses_addToCart.data);
      toast.success(`success`, {
        autoClose: 3000,
        hideProgressBar: false,
      });
    },
    onError: (error) => {
      toast.error(`error:${error.message}`, {
        autoClose: 3000,
        hideProgressBar: false,
      });
    },
  });

  return [addToCartFn, data, error, loading];
};

export const useRemoveFromCart = () => {
  const courseFromCartData = useReactiveVar(cartItemsVar);
  const [removeFromCartFn, { data, loading, error }] = useMutation(
    REMOVE_FROM_CART,
    {
      onCompleted: (data) => {
        cartItemsVar(data?.courses_removeFromCart.data);
        toast.success(`success`, {
          autoClose: 3000,
          hideProgressBar: false,
        });
        console.log({ courses: data, courseFromCartData });
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`, {
          autoClose: 3000,
          hideProgressBar: false,
        });
        console.log({ error });
      },
    }
  );

  return [removeFromCartFn, data, error, loading];
};
