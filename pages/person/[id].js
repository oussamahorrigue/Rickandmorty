import React from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import Character from "../../components/Character";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const Person = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://rickandmortyapi.com/graphql",
  });
  const route = useRouter();
  const { query } = route;

  return (
    <ApolloProvider client={client}>
      <Character path={query.id} />
    </ApolloProvider>
  );
};
export default Person;
