import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 35vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

const Header = () => {
  return (
    <>
      <MainContainer>
        <h1>Test</h1>
      </MainContainer>
    </>
  );
};

export default Header;
