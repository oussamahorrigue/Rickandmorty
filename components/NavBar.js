import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavBar_Container = styled.div`
  display: flex;
  width: 100%;

  justify-content: flex-start;
  label {
    font-size: 25px;
    color: #30403e;
    cursor: pointer;
  }
`;

const NavBar = () => {
  return (
    <NavBar_Container>
      <Link href="/">
        <label>Home</label>
      </Link>
    </NavBar_Container>
  );
};
export default NavBar;
