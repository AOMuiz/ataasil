import { COURSES } from "../graphql/queries/courses";
import { useQuery } from "@apollo/client";

const useFetchCourses = ({ pagination, filter }) => {
  const { data, error, loading, refetch } = useQuery(COURSES, {
    variables: {
      pagination: { ...pagination },
      filter: { category: "", title: "" },
    },
    onCompleted: (data) => console.log({ courses: data }),
    onError: (error) => console.log({ error }),
  });

  return [data, error, loading, refetch];
};

export default useFetchCourses;
