import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 65vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

const LinkBoxes = styled.div`
  height: 12%;
  width: 30%;
  border: black solid 1px;
  margin-top: 20px;
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <LinkBoxes>
          <div>Instagram</div>
        </LinkBoxes>
        <LinkBoxes>
          <div>AudioTree</div>
        </LinkBoxes>
        <LinkBoxes>
          <div>Hire me</div>
        </LinkBoxes>
        <LinkBoxes>
          <div></div>
        </LinkBoxes>
      </MainContainer>
    </>
  );
};

export default Main;
