import { COURSES_GET_CART } from "../graphql/queries/courses";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../graphql/mutations/courses";
import { useMutation, useQuery } from "@apollo/client";

export const useGetCart = () => {
  const {
    data: cartData,
    error,
    loading,
  } = useQuery(COURSES_GET_CART, {
    onCompleted: (data) => console.log({ courses: data }),
    onError: (error) => console.log({ error, pagination }),
  });

  return [cartData, error, loading];
};

export const useAddToCart = () => {
  const [addToCartFn, { data, loading, error }] = useMutation(ADD_TO_CART, {
    onCompleted: (data) => console.log({ courses: data }),
    onError: (error) => console.log({ error }),
  });

  return [addToCartFn, data, error, loading];
};

export const useRemoveFromCart = () => {
  const [removeFromCartFn, { data, loading, error }] = useMutation(
    REMOVE_FROM_CART,
    {
      onCompleted: (data) => console.log({ courses: data }),
      onError: (error) => console.log({ error }),
    }
  );

  return [removeFromCartFn, data, error, loading];
};
