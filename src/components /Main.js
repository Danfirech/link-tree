import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 75vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdfbfb;
`;

const LinkBoxes = styled.div`
  height: 40px;
  width: 30%;
  border: #00ffc6 solid 1px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .words {
    font-family: "Noto Sans Display", sans-serif;
    font-size: 20px;
    color: #30aadd;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Instagram</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">AudioTree</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Hire me</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Bio</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Contact: Email</div>
          </a>
        </LinkBoxes>
      </MainContainer>
    </>
  );
};

export default Main;
