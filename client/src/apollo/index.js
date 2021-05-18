import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { TOKEN_NAME } from '../const';

const uri = 'http://localhost:4000/graphql';

const httpLink = createHttpLink({
  uri,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(TOKEN_NAME);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const projectsMergeConfig = {
  keyArgs: false,
  merge(existing = null, incoming) {
    if (!existing || !existing?.results?.length) {
      return incoming;
    }

    if (!incoming.prevCursor) {
      return existing;
    }

    if (existing.nextCursor === incoming.nextCursor) {
      return existing;
    }

    const existingResults = existing?.results ?? [];
    return {
      ...incoming,
      results: [...existingResults, ...incoming.results],
    };
  },
};

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getApprovedProjects: projectsMergeConfig,
          getMyProjects: projectsMergeConfig,
          getMyFavoriteProjects: projectsMergeConfig,
          adminGetNotApprovedProjects: projectsMergeConfig,
        },
      },
    },
  }),
});
