import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, concat } from '@apollo/client';
import { AuthProvider } from './context/Auth';

const httpLink = new HttpLink({ uri: 'https://petgram-server-santinaranjo-santinaranjo.vercel.app/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })

  return forward(operation)
})

const client = new ApolloClient({
  // uri: 'https://petgram-server-santinaranjo-santinaranjo.vercel.app/graphql',
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
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
