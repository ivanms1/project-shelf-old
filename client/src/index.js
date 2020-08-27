import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';
import App from './App';
import { AppContext } from '../src/Context/AppContext';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
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
