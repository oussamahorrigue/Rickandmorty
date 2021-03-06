import React from "react";
import Characters from "../components/Characters";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const Home = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://rickandmortyapi.com/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
  );
};

export default Home;
