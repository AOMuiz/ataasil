import { COURSES } from "../graphql/queries/courses";
import { useQuery } from "@apollo/client";

const useFetchCourses = ({ pagination, filter }) => {
  const { data, error, loading } = useQuery(COURSES, {
    variables: { pagination: { ...pagination }, filter: { ...filter } },
    onCompleted: (data) => console.log({ courses: data }),
    onError: (error) => console.log({ error, pagination }),
  });

  return [data, error, loading];
};

export default useFetchCourses;
