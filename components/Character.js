import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "./Queries/CharacterQuery";
import styled from "styled-components";
import NavBar from "./NavBar";
import Head from "next/head";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
const Description = styled.div`
  display: flex;
`;
const Name = styled.p`
  color: #145896;
  font-size: 1.5rem;
`;
const Episode_Name = styled.p`
  color: #40a497;
  font-size: 1.2rem;
`;
const Episode_Title = styled.div`
  color: #ccc;
  background-color: black;
  font-size: 1.2rem;
  height: 3rem;
  vertical-align: middle;
  text-align: center;
  width: 400px;
  border-radius: 15px;
`;
const Image_Container = styled.div`
  height: 300px;
  margin-right: 35px;
  position: relative;
  overflow: hidden;
  p {
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 1.3rem;
    background-color: white;
    width: 90%;
    transform: rotatez(40deg) translateX(75px);
    text-align: center;
  }
`;
const Episode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  weight: 10%;
`;

const Character = ({ path }) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id: path,
    },
  });

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
  return (
    <Container>
      <NavBar />
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <title>{data.character.name}</title>
      </Head>

      <Name>{data.character.name}</Name>
      <Description>
        <Image_Container>
          <p>{data.character.name}</p>
          <img src={data.character.image} />
        </Image_Container>
        <Episode>
          <Episode_Title>
            <p>Episodes in which this character appeared:</p>
          </Episode_Title>
          {data.character.episode.map((epi) => {
            return (
              <div key={epi.id}>
                <Episode_Name>{epi.name}</Episode_Name>
              </div>
            );
          })}
        </Episode>
      </Description>
    </Container>
  );
};
export default Character;
