import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./Queries/CharacterQuery";
import styled from "styled-components";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Head from "next/head";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
  background-color: #ccc;
  border-radius: 30px;
`;
const NavBar_Container = styled.div`
  display: flex;
  width: 100%;
  margin: 25px;
  justify-content: center;
  label {
    font-size: 25px;
    color: #30403e;
    margin-right: 25px;
    @media (max-width: 40rem) {
      font-size: 2rem;
    }
  }
  input {
    width: 70%;
    border: 2px solid #ccc;
    border-radius: 5px;
    @media (max-width: 40rem) {
      width: 40%;
    }
  }
`;
const Image = styled.img`
  cursor: pointer;
`;

const Characters = () => {
  const [FilterText, setFilterText] = useState("");
  const route = useRouter();
  const { data, error, loading } = useQuery(GET_CHARACTERS);
  if (loading)
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "150px" }}
      >
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
        </Head>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="alert alert-primary" role="alert">
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
        </Head>
        Error Found !
      </div>
    );

  const nameList = data.characters.results
    .filter((name) => {
      return name.name.toLowerCase().indexOf(FilterText.toLowerCase()) >= 0;
    })
    .map((character) => {
      return (
        <Box key={character.id}>
          <p>{character.name}</p>
          <Image
            src={character.image}
            alt={character.name}
            onClick={() => route.push(`/person/${character.id}`)}
          />
        </Box>
      );
    });
  return (
    <>
      <Head>
        <title>rickandmorty</title>
      </Head>
      <NavBar_Container>
        <label>Search character</label>
        <input
          placeholder="Name..."
          onChange={(e) => setFilterText(e.target.value)}
        />
      </NavBar_Container>
      <Container>{nameList}</Container>
    </>
  );
};
export default Characters;
