import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
  padding: 10px;
  border: 1px solid black;
  background: lightblue;
`;

export const Navbar = () => {
  return (
    <>
      <StyledNav>
        <div>
          <Link to="/Home">HOME</Link>
        </div>
        <div>
          <Link to="/Login">LOGIN</Link>
        </div>
        <div>
          <Link to="/About">ABOUT</Link>
        </div>
      </StyledNav>
    </>
  );
};
