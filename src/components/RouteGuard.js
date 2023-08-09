import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useGetProfile from "../hooks/useGetProfile";
import { client } from "../apollo-client";
import { isLoggedIn } from "../utils/auth";
import { authStateVar } from "../graphql/state";
import { toast } from "react-toastify";

const RouteGuard = ({ children, excludedRoutes }) => {
  const {
    studentProfileResponse: user,
    studentProfileError,
    refetch,
  } = useGetProfile();
  const { authenticated } = useReactiveVar(authStateVar);
  const router = useRouter();

  useEffect(() => {
    if (!excludedRoutes?.includes(router.pathname)) {
      refetch();
    }
    console.log(authenticated);
  }, [router.pathname, refetch, excludedRoutes]);

  useEffect(() => {
    if (!authenticated && !excludedRoutes?.includes(router.pathname)) {
      router.push("/login");
      toast.error(`Error: ${studentProfileError}`, {
        autoClose: 3000,
        hideProgressBar: false,
      });
      client.resetStore();
    }
  }, [authenticated, router, excludedRoutes]);

  return (
    <>
      {excludedRoutes?.includes(router.pathname) ? (
        children
      ) : (
        <>{user && children}</>
      )}
    </>
  );
};

export default RouteGuard;
