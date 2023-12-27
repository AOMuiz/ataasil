import { COURSES } from "../graphql/queries/courses";
import { useQuery } from "@apollo/client";

const useFetchCourses = ({ pagination, filter }) => {
  const { data, error, loading, refetch } = useQuery(COURSES, {
    variables: {
      pagination: { limit: 10, page: 1 },
      filter: { category: "", title: "" },
    },
    onCompleted: (data) => console.log({ courses: data }),
    onError: (error) => console.log({ error }),
  });

  return [data, error, loading, refetch];
};

export default useFetchCourses;
