import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getToken } from "./utils/auth";

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_ROOT_URL + "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "Bearer none",
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          courses: {
            // Don't cache separate results based on

            // any of this field's arguments.

            keyArgs: ["filter"],

            // Concatenate the incoming list items with

            // the existing list items.

            merge(existing, incoming, { args: { page = 1 } }) {
              // Slicing is necessary because the existing data is

              // immutable, and frozen in development.

              const merged = existing ? existing.slice(0) : [];

              for (let i = 0; i < incoming.length; ++i) {
                merged[page + i] = incoming[i];
              }

              return merged;
            },
          },
        },
      },
    },
  }),
  link: from([errorLink, authLink.concat(httpLink)]),
});
