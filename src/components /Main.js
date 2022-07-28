import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 65vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdfbfb;
`;

const LinkBoxes = styled.div`
  height: 10%;
  width: 30%;
  border: black solid 1px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <div>Contact: Email</div>
        </LinkBoxes>
      </MainContainer>
    </>
  );
};

export default Main;
