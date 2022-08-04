import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { AuthProvider } from './context/Auth';

const client = new ApolloClient({
  uri: 'https://petgram-server-santinaranjo-santinaranjo.vercel.app/graphql',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(
  document.getElementById('app')
)

root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App></App>
    </ApolloProvider>
  </AuthProvider>
)
