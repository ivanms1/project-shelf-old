import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import App from './App';
import { AppContext } from '../src/Context/AppContext';

import './index.css';

const uri = 'http://localhost:4000/graphql';

const httpLink = createHttpLink({
  uri,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('userToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'current-user-id': token,
    },
  };
});

const projectsMergeConfig = {
  keyArgs: false,
  merge(existing = [], incoming) {
    if (!existing) {
      return incoming;
    }

    const existingResults = existing?.results ?? [];
    return {
      ...incoming,
      results: [...existingResults, ...incoming.results],
    };
  },
};

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getProjects: projectsMergeConfig,
          getMyProjects: projectsMergeConfig,
          getMyFavoriteProjects: projectsMergeConfig,
        },
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppContext>
        <App />
      </AppContext>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
